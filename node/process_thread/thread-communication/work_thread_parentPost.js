const { Worker, isMainThread, parentPort } = require('worker_threads');
// 计算斐波那契数列第 n 项
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}
if (isMainThread) { // 主线程执行函数
  const worker = new Worker(__filename);
  worker.once('message', (message) => {
    const { num, result } = message;
    console.log(`Fibonacci(${num}) is ${result}`);
    process.exit();
  });
  worker.postMessage(43);
  console.log('start calculate Fibonacci');
  // 继续执行后续的计算程序
  setInterval(() => {
    console.log(`continue execute code ${new Date().getSeconds()}`);
  }, 1000);
} else { // 子线程执行函数
  parentPort.once('message', (message) => {
    const num = message;
    const result = fib(num);
    // 子线程执行完毕，发消息给父线程
    parentPort.postMessage({
      num,
      result
    });
  });
}
// node --experimental-worker work_thread.js  执行 require(worker_threads)
