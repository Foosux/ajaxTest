var host = 'http://adnet.ke.com:18989/'
// var host = 'http://10.30.128.233:18989/'

module.exports = {
  proxy: true,  // true时使用代理，可使用ajax选项再做细分
  api: {
    '.*': {
      target: host,
      ajax: true,   // 是否只有ajax请求命中（X-Requested-With: XMLHttpRequest）
      // bypass: function (req, res) {
      //   req.path = "/desktop" + req.path
      // },
      secure: false
    }
  }
}
