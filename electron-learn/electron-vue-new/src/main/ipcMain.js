let mainWindow;
// 在主进程中.
const { ipcMain } = require("electron");
// 注册相应的消息处理
ipcMain.on("asynchronous-message", (event, arg) => {
  console.log(arg); // prints "ping"
  event.reply("asynchronous-reply", "asynchronous-reply");
});

ipcMain.on("synchronous-message", (event, arg) => {
  console.log(arg); // prints "ping"
  event.returnValue = "pong";
  // 测试主进程主动发起消息
  if (mainWindow) {
    console.info(`-----------main send msg-----------`);
    // 主进程主动发起消息
    mainWindow.webContents.send("receive_main_process_message", "123");
  }
});

// Main process
ipcMain.handle("my-invokable-ipc", async (event, ...args) => {
  console.log("args", args);
  const result = new Promise(
    (resolve) => {
      resolve("invokable-ipc handle result");
    },
    (rejet) => {}
  );
  return result;
});

function setMainWindow(window) {
  mainWindow = window;
}
export default setMainWindow;
