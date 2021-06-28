// 在主进程中.
const { ipcMain } = require("electron");
ipcMain.on("asynchronous-message", (event, arg) => {
  console.log(arg); // prints "ping"
  event.reply("asynchronous-reply", "asynchronous-reply");
});

ipcMain.on("synchronous-message", (event, arg) => {
  console.log(arg); // prints "ping"
  event.returnValue = "pong";
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
