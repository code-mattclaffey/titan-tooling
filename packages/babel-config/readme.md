# Titan Babel Config

> Reusable babel config that can get you setup on es6 module projects

## Installation

1. yarn add @titan-tooling/babel-config --dev
2. extend which config you need in the `.babelrc` file:

```
{
  "extend": "@titan-tooling/babel-config"
}
```

## Production config

`BABEL_ENV=production` needs to be set for the minfication to work.

## Plugins

- [@babel/plugin-proposal-object-rest-spread](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread) - support for the spread operator
- [@babel/plugin-transform-modules-commonjs](https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs) - compiles es6 modules to commonjs
- [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) - provides support for dynamic imports
