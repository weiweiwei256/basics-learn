
const {
  isMainThread, parentPort, threadId, MessageChannel, Worker
} = require('worker_threads');
 
if (isMainThread) {
  const worker1 = new Worker(__filename);
  const worker2 = new Worker(__filename);
  // 创建通信信道，包含 port1 / port2 两个端口
  const subChannel = new MessageChannel();
  // 两个子线程绑定各自信道的通信入口
  worker1.postMessage({ port: subChannel.port1 }, [ subChannel.port1 ]);
  worker2.postMessage({ port: subChannel.port2 }, [ subChannel.port2 ]);
} else {
  parentPort.once('message', value => {
    value.port.postMessage(`Hi, I am thread${threadId}`);
    value.port.on('message', msg => {
      console.log(`thread${threadId} receive: ${msg}`);
    });
  });
}

