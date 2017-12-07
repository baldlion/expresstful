const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const WebpackShellPlugin = require('webpack-shell-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/index',

  output: {
    filename: 'expresstful-demo.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      'expresstful': path.resolve(__dirname, '../src')
    }
  },

  plugins: [
    new WebpackShellPlugin({onBuildEnd: ['nodemon dist/expresstful-demo.bundle.js --watch dist']})
  ]
}
