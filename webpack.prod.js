const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",
    entry: './src/decorators/BaseMetadata.ts',
    plugins: [
        new UglifyJSPlugin()
    ]
});