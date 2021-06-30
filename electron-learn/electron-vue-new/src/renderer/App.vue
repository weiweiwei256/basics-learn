<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  name: "electron-vue-new",
  mounted() {
    ipcRenderer.on("message", (event, text) => {
      console.log(arguments);
    });
    //注意：“downloadProgress”事件可能存在无法触发的问题，只需要限制一下下载网速就好了
    ipcRenderer.on("downloadProgress", (event, progressObj) => {
      console.log(progressObj);
      this.downloadPercent = progressObj.percent || 0;
    });
    ipcRenderer.on("isUpdateNow", () => {
      ipcRenderer.send("isUpdateNow");
    });

  },
};
</script>

<style>
/* CSS */
</style>
