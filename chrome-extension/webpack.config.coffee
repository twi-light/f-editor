path = require 'path'
webpack = require 'webpack'

module.exports = {
  watch: yes
  entry:
    'content-script': './src/content-script.coffee'
    'background': './src/background.coffee'
    'popup': './src/popup.coffee'
  output:
    path: path.join __dirname, 'dist'
    filename: '[name].js'
    chunkFilename: '[id].js'
  devtool: 'source-map'
  module:
    loaders: [
      {
        test: /manifest\.json$|\.html$|\.png$/i
        loader: 'file?name=[name].[ext]'
      }
      { test: /\.styl$/i, loaders: ['style/useable', 'css', 'stylus'] }
      { test: /\.cjsx$/i, loaders: ['babel?presets[]=es2017', 'coffee', 'cjsx'] }
      { test: /\.coffee$/i, loaders: ['babel?presets[]=es2017', 'coffee'] }
    ]
}
