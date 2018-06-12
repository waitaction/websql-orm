const path = require('path');

module.exports = {
  entry: './example/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};