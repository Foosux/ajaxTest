var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var proxy = require('http-proxy-middleware')

module.exports = {
  entry:[
    './src/index'
  ],
  output:{
    path: path.resolve(__dirname, "dist"),
    filename:"js/index.js",
    publicPath:"/",
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: __dirname + "/src/template/index.html"
    })
  ],
  devtool:"eval",
  devServer:{
    port: 8888,
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    proxy: {
      '/api': {
        target: 'http://adnet.ke.com:18989/',
        changeOrigin: false
      }
    }
  },
}
