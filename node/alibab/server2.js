const http = require('http'); //引入http模块
const path = require('path');
const chokidar = require('chokidar'); //引入http模块
let server = http.createServer(function (req, res) {
  //创建一个服务
  res.write('aaa');
  res.end();
});
server.listen(8888); //监听 端口8888
console.log('server is started');
console.log('__dirname', __dirname);
const watchPath = path.join(__dirname, 'src/test.json');
console.log('watchPath', watchPath);
chokidar
  .watch(watchPath, {
    persistent: true,
  })
  .on('all', async (arg) => {
    console.log('arg', arg);
    console.info('-----------test change-----------');
  });
