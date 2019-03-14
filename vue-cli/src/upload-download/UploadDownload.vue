<template>
  <div id='upload-download'>
    <p>打开</p>
    <span class="fileinput-button">
      <span>打开文件</span>
      <input type="file"
             id="file1"
             @change="jsReadFiles" />
    </span>
    <div id="result"
         name="result"></div>
    <br>
    <p>保存</p>
    <button @click="handleSave">保存</button>
  </div>
</template>

<script>
export default {
  name: 'upload-download',
  data: function () {
    return {}
  },
  methods: {
    //js 读取文件
    jsReadFiles: function () {
      var file = document.getElementById("file1").files[0];
      var reader = new FileReader();
      //将文件以文本形式读入页面
      reader.readAsText(file);
      reader.onload = function (f) {
        var result = document.getElementById("result");
        //显示文件
        result.innerHTML = this.result
      }
    },
    handleSave: function () {
      console.log('save')
      let result = document.execCommand('SaveAs', true, 'sdfa.txt')
      console.log(result)
    }
  }
}
</script>

<style>
.fileinput-button {
  position: relative;
  display: inline-block;
}

.fileinput-button input {
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>
