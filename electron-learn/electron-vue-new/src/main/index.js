import { app, BrowserWindow } from "electron";
import { autoUpdater } from "electron-updater";
import updateHandle from "./update";
import "../renderer/store";
import setMainWindow from "./ipcMain";

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}

let mainWindow;
const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    webPreferences: {
      nodeIntegration: true, // 处理 require undefined 问题
      enableRemoteModule: true, // 在渲染进程中使用主进程模块。https://www.electronjs.org/docs/api/remote
    },
  });

  mainWindow.loadURL(winURL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  setMainWindow(mainWindow);
  updateHandle(mainWindow);
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

autoUpdater.on("update-downloaded", () => {
  autoUpdater.quitAndInstall();
});

app.on("ready", () => {
  if (process.env.NODE_ENV === "production") {
    // 自动触发第一次更新检测
    autoUpdater.checkForUpdates();
  }
});
