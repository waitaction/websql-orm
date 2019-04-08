const path = require('path');

module.exports = {
    entry: './index.ts',
    mode: 'production',//development
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
        extensions: ['.ts']
    },
    output: {
        libraryTarget: "umd",
        filename: 'index.js',
        path: path.resolve(__dirname, '')
    }
};
