
// # 主进程
const { fork } = require('child_process');
const child = fork('./process_child.js'); // 创建子进程
child.send({ num: 44 }); // 将任务执行数据通过信道发送给子进程
child.on('message', message => {
  console.log('receive from child process, calculate result: ', message.data);
  child.kill();
});
child.on('exit', () => {
  console.log('child process exit');
});
setInterval(() => { // 主进程继续执行
  console.log('continue excute javascript code', new Date().getSeconds());
}, 1000);
