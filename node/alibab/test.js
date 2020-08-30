const { execSync } = require('child_process');
console.info('----------------------');
function killPort(port) {
  console.info('----------------------');

  try {
    const cmd = `nc -lk ${port}`;
    const processId = execSync(cmd, { cwd: process.cwd() }).toString().trim();
    console.log('processId', processId);
  } catch (e) {
    // console.log('自动杀死占用端口进程失败，请自行手工操作');
  }
}
killPort(8888);
