module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "import/prefer-default-export": "off",
  },
  "globals": {
    "describe": "readonly",
    "expect": "readonly",
    "it": "readonly",
  }
};