// 测试mock
var appServer=require('webpack-dev-server')
var config=require('./webpack.config')
var path = require('path')
var webpack = require('webpack')
var process = require('process')
var mockSever = require('./src/middleware')
// var mockConfig = require('./config/mock')

var compiler = webpack(config)

const server = new appServer(compiler, {
  historyApiFallback: true,
  hot: true,
  contentBase: path.join(__dirname, "dist")
})

mockSever(server.app, path.join(__dirname, "mock"), path.join(__dirname, "config/mock.js"))

server.listen('8888', '', (err, result) => {
  console.log('start at port: 8888' + ",pid:" + process.pid)
})
