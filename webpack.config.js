const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/index',

  output: {
    filename: 'expresstful.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'expresstful',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
