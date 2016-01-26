path = require 'path'
webpack = require 'webpack'

module.exports =
  watch: yes
  entry:
    'content-script.js': './src/content-script.coffee'
    'popup.js': './src/popup.coffee'
  output:
    path: path.join __dirname, 'dist'
    filename: '[name]'
  devtool: 'source-map'
  resolve:
    extensions: ['', '.js', '.cjsx', '.coffee', '.styl']
  module:
    loaders: [
      { test: /^manifest.json$|\.html$/, loader: "file" }
      { test: /\.styl$/i, loaders: ['style', 'css', 'stylus'] }
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx'] }
      { test: /\.coffee$/i, loader: 'coffee' }
    ]
