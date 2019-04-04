const path = require('path');

module.exports = {
    entry: './test/Demo.ts',
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'test-bundle.js',
        path: path.resolve(__dirname, 'dist')
    }

};
