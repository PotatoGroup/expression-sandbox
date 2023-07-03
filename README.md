<div align="center">
   <img src="https://www.cryptocoinzone.com/wp-content/uploads/2021/11/Sandbox-SAND-logo.png" height="200"/>
</div>

# expression-sandbox

a simple sandbox for execute JS expression, support as follows:

- custom prefix;
- template expression;

## Install

```typeScript
npm install @astii/expression-sandbox --save

or

yarn add @astii/expression-sandbox

```

## Usage

```typeScript
import { ExpressionSandbox } from '@astii/expression-sandbox'
const context = {};
const sandbox = new ExpressionSandbox({context});
const ret = sandbox.executeWithTemplate(expression);  //execute expression with template

or

const ret = sandbox.execute(expression);  //execute expression without template
```

## Template

1. {expression}
2. {expression}-{expression}
