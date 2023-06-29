<div align="center">
   <img src="https://www.cryptocoinzone.com/wp-content/uploads/2021/11/Sandbox-SAND-logo.png" height="200"/>
</div>

# expression-sandbox

a simple sandbox for execute JS expression, support as follows:

- custom prefix;
- template expression;

## Install

```typeScript
npm install @potato/expression-sandbox --save

or

yarn add @potato/expression-sandbox

```

## Usage

```typeScript
import { ExpressionSandbox } from '@potato/expression-sandbox'
const context = {};
const sandbox = new ExpressionSandbox({context});
sandbox.executeWithTemplate(expression);  //execute expression with template

or

sandbox.execute(expression);  //execute expression without template
```

## Template

1. {expression}
2. {expression}-{expression}
