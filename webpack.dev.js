const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: './src/test/demo.ts',
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './test'
    }
});