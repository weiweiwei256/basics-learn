const http = require('http') //引入http模块
let { str, arr, targetObj } = require('./a')
console.log(str, arr, targetObj)
let server = http.createServer(function(req, res) {
    //创建一个服务
    res.write('aaa')
    res.end()
})
server.listen(8888) //监听 端口8888
console.log('server is started')
