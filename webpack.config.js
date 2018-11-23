var webpack = require('webpack');
var path = require("path");

module.exports = {
  mode:"development",
  entry: {
    'aframe-ahead' : './src/main'
  },
  output: {
    path: __dirname + '/dest',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test   : /\.js/,
        exclude: /node_modules/,
        loader : 'eslint-loader'
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  }
};
