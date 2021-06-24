import { app, BrowserWindow, ipcMain } from "electron";

// 注意这个autoUpdater不是electron中的autoUpdater
import { autoUpdater } from "electron-updater";
// 更新服务器地址，比如"http://**.**.**.**:3002/download/"

// 检测更新，在你想要检查更新的时候执行，renderer事件触发后的操作自行编写
function updateHandle(mainWindow) {
  // 通过main进程发送事件给renderer进程，提示更新信息
  function sendUpdateMessage(text) {
    mainWindow.webContents.send("message", text);
  }
  let message = {
    error: "检查更新出错",
    checking: "正在检查更新……",
    updateAva: "检测到新版本，正在下载……",
    updateNotAva: "现在使用的就是最新版本，不用更新",
  };
  const os = require("os");

  autoUpdater.setFeedURL("http://10.159.2.35:9011");
  autoUpdater.on("error", function(error) {
    sendUpdateMessage(message.error);
  });
  autoUpdater.on("checking-for-update", function() {
    sendUpdateMessage(message.checking);
  });
  autoUpdater.on("update-available", function(info) {
    sendUpdateMessage(message.updateAva);
  });
  autoUpdater.on("update-not-available", function(info) {
    sendUpdateMessage(message.updateNotAva);
  });

  // 更新下载进度事件
  autoUpdater.on("download-progress", function(progressObj) {
    mainWindow.webContents.send("downloadProgress", progressObj);
  });
  autoUpdater.on("update-downloaded", function(
    event,
    releaseNotes,
    releaseName,
    releaseDate,
    updateUrl,
    quitAndUpdate
  ) {
    ipcMain.on("isUpdateNow", (e, arg) => {
      console.log(arguments);
      console.log("开始更新");
      //some code here to handle event
      autoUpdater.quitAndInstall();
    });

    mainWindow.webContents.send("isUpdateNow");
  });

  ipcMain.on("checkForUpdate", () => {
    //执行自动更新检查
    autoUpdater.checkForUpdates();
  });
}

export default updateHandle;
