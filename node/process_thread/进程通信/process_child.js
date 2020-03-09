// # 子进程 fib.js
// 接收主进程消息，计算斐波那契数列第 N 项，并发送结果给主进程
// 计算斐波那契数列第 n 项
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}
process.on('message', msg => { // 获取主进程传递的计算数据
  console.log('child pid', process.pid);
  const { num } = msg;
  const data = fib(num);
  process.send({ data }); // 将计算结果发送主进程
});
// 收到 kill 信息，进程退出
process.on('SIGHUP', function() {
    console.log('resolve msg SIGHUP')
  process.exit();
});