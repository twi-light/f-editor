path = require 'path'
webpack = require 'webpack'
HtmlWebpackPlugin = require 'html-webpack-plugin'

module.exports =
  watch: yes
  entry:
    'content-script.www.f-list.net.js': 'content-script.www.f-list.net.coffee'
    'popup.js': 'popup.coffee'
  output:
    path: path.join __dirname, 'dist'
    filename: '[name]'
  devtool: 'source-map'
  plugins: [
    new HtmlWebpackPlugin {
      filename: 'popup.html'
    }
    # new webpack.optimize.UglifyJsPlugin {
    #   minimize: yes
    #   compress: warnings: no
    # }
  ]
  resolve:
    extensions: ['', '.js', '.cjsx', '.coffee', '.styl']
  module:
    loaders: [
      { test: /^manifest.json$|\.html$/, loader: "file" }
      { test: /\.styl$/i, loaders: ['style', 'css', 'stylus'] }
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx'] }
      { test: /\.coffee$/i, loader: 'coffee' }
    ]
