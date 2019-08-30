module.exports = {
	"parser": "babel-eslint",
	"presets": [
		"@babel/preset-env",
		"@babel/preset-react",
	],
	"env": {
    "production": {
      "presets": ["minify"]
    }
  },
	"plugins": [
		[
			"@babel/plugin-transform-runtime",
			{
				"regenerator": true
			}
		],
		"@babel/plugin-proposal-object-rest-spread",
		"@babel/plugin-syntax-class-properties",
		"@babel/plugin-transform-modules-commonjs",
		"@babel/plugin-syntax-dynamic-import"
	]
}