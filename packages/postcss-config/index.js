const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const customMedia = require("postcss-custom-media");
const postcssImport = require("postcss-import");
const pxtorem = require("postcss-pxtorem");
const mqpacker = require("mqpacker");
const stylelint = require("stylelint");

module.exports = () => [
    postcssImport({
        plugins: [stylelint()]
    }),
    autoprefixer({
        flexbox: "no-2009"
    }),
    cssnano(),
    customMedia(),
    mqpacker({
        sort: true
    }),
    pxtorem()
];
