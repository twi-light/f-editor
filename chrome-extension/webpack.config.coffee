path = require 'path'
webpack = require 'webpack'
ExtractTextPlugin = require 'extract-text-webpack-plugin'

module.exports =
  watch: yes
  entry:
    'content-script': './src/content-script.coffee'
    'popup': './src/popup.coffee'
    'background': './src/background.coffee'
  output:
    path: path.join __dirname, 'dist'
    filename: '[name].js'
    chunkFilename: '[id].js'
  devtool: 'source-map'
  resolve:
    extensions: ['', '.js', '.cjsx', '.coffee', '.styl']
  module:
    loaders: [
      { test: /manifest\.json$|\.html$|\.png$/i, loader: 'file?name=[name].[ext]' }
      {
        test: /\.styl$/i
        loader: ExtractTextPlugin.extract 'style-loader',
          'css-loader!stylus-loader'
      }
      { test: /\.cjsx$/i, loaders: ['coffee', 'cjsx'] }
      { test: /\.coffee$/i, loader: 'coffee' }
    ]
  plugins: [
    new ExtractTextPlugin '[name].css'
  ]
