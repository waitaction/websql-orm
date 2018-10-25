const path = require('path');

module.exports = {

  output: {
    filename: 'demo.js',
    path: path.resolve(__dirname, 'test')
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