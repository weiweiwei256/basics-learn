// # 示例二
require('fs').readFile('./normal-server.js', err => {
  if (err) {
    console.log(err);
    process.exit();
  } else {
    console.log(Date.now(), 'Read File I/O');
  }
});
console.log(process.pid);
