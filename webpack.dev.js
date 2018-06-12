const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: './example/index.ts',
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});