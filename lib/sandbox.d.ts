type Options = Partial<{
    prefix: string;
    context: Record<string, any>;
}>;
export declare class Sandbox {
    private options;
    constructor(options: Options);
    private unscopeCompileCode;
    private scopeCompileCode;
    execute(expression: string): any;
    executeWithTemplate(expression: string): any;
}
export {};
