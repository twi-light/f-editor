path = require 'path'
webpack = require 'webpack'

module.exports =
  entry: './src/f-editor.coffee'
  devtool: 'source-map'
  devServer:
    open: yes
    port: 80
  plugins: [
    new webpack.optimize.UglifyJsPlugin {
      minimize: yes
      compress: warnings: no
    }
  ]
  output:
    path: path.join __dirname, 'dist/'
    publicPath: 'dist/'
    filename: 'f-editor.js'
  resolve:
    extensions: ['', '.js', '.cjsx', '.coffee', '.styl']
  module:
    loaders: [
      { test: /\.styl$/i, loaders: ['style', 'css', 'stylus']}
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx'] }
      { test: /\.coffee$/i, loader: 'coffee' }
    ]
