
// # 计算斐波那契数列第 43 / 44 项
const cluster = require('cluster');
// 计算斐波那契数列第 n 项
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}
if (cluster.isMaster) { // 主控节点逻辑
  for (let i = 43; i < 45; i++) {
    const worker = cluster.fork() // 启动子进程
    // 发送任务数据给执行进程，并监听子进程回传的消息
    worker.send({ num: i });
    worker.on('message', message => {
      console.log(`receive fib(${message.num}) calculate result ${message.data}`)
      worker.kill();
    });
  }
    
  // 监听子进程退出的消息，直到子进程全部退出
  cluster.on('exit', worker => {
    console.log('worker ' + worker.process.pid + ' killed!');
    if (Object.keys(cluster.workers).length === 0) {
      console.log('calculate main process end');
    }
  });
} else {
  // 子进程执行逻辑
  process.on('message', message => { // 监听主进程发送的信息
    const { num } = message;
    console.log('child pid', process.pid, 'receive num', num);
    const data = fib(num);
    process.send({ data, num }); // 将计算结果发送给主进程
  })
}

