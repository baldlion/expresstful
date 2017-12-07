const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/index',

  output: {
    filename: 'expresstful.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: [new UglifyJSPlugin()]
}
