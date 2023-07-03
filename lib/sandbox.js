"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sandbox = void 0;
class Sandbox {
    constructor(options) {
        this.options = {};
        this.options = options;
    }
    unscopeCompileCode(prefix = "context", expression) {
        return new Function(prefix, `with(${prefix}){
            return ${expression}
        }`);
    }
    scopeCompileCode(expression) {
        const fn = this.unscopeCompileCode(this.options.prefix, expression);
        return (sandbox) => {
            const _target = this.options.prefix
                ? { [this.options.prefix]: sandbox }
                : sandbox;
            const proxy = new Proxy(_target, {
                // 拦截所有属性，防止到 Proxy 对象以外的作用域链查找
                has(target, key) {
                    return true;
                },
                get(target, key, receiver) {
                    // 防止沙箱逃逸逃逸
                    if (key === Symbol.unscopables) {
                        return undefined;
                    }
                    return Reflect.get(target, key, receiver);
                },
            });
            return fn(proxy);
        };
    }
    execute(expression) {
        var _a;
        const fn = this.scopeCompileCode(expression);
        const _context = (_a = this.options.context) !== null && _a !== void 0 ? _a : {};
        return fn.call(this, _context);
    }
    executeWithTemplate(expression) {
        const reg = /\{([^\{\}]*?|.+)\}/g;
        const matchIterator = expression.matchAll(reg);
        const iteratorArray = Array.from(matchIterator);
        if (!iteratorArray.length)
            return expression;
        const retGroup = iteratorArray.map((it) => {
            const match = it[0];
            const input = it.input;
            let ret = it[1];
            if (!!ret.trim()) {
                ret = this.execute(ret);
            }
            return {
                match,
                ret,
                input,
            };
        });
        const retStr = retGroup.reduce((pre, cur) => {
            const { match, ret } = cur;
            if (match === expression) {
                return ret;
            }
            return pre.replace(match, ret);
        }, expression);
        try {
            return JSON.parse(retStr);
        }
        catch (error) {
            return retStr;
        }
    }
}
exports.Sandbox = Sandbox;