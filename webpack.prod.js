const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",
    entry: './src/test/demo.ts',
    plugins: [
       new UglifyJSPlugin()
    ]
});