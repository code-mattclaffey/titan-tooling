# Titan Postcss Config

> A reuasble postcss config which gets you quickly setup on projects

## Installation

1. yarn add @titan-tooling/postcss-config --dev
2. require the config to the `postcss.config.js` file in the root of the project:

```
  const titanPostCSS = require('@titan-tooling/postcss-config');

  module.export = {
    plugins: [
      ...titanPostCSS
    ]
    // my extra plugins
  };
```

### Installing with postcss loader

```
{
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => titanPostCSS,
  },
},
```

## Features

- [autoprefixer](https://github.com/postcss/autoprefixer) - prefixes any css properties for each browser
- [cssnano](https://github.com/cssnano/cssnano) - minifies the css for production
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) - provides fallback support for css variables
- [postcss-custom-media](https://github.com/postcss/postcss-custom-media) - allows you to crete reusable media queries
- [postcss-import](https://github.com/postcss/postcss-import) - Allows you to import css into the main css file and then bundles them al together at compile time
- [stylelint](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/postcss-plugin.md) - lints all the css. Extends stylint recommended config