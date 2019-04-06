<template>
  <div id='cropper-demo'>
    <div id='image-container'>
      <img id='my-image'
           src='./demo.png' />
    </div>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
export default {
  name: 'cropper-demo',
  data: function() {
    return {}
  },
  mounted: function() {
    let image = document.getElementById('my-image')
    const cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      dragMode: 'move',
      // 0：没有限制，3可以移动到2外。
      // 1 : 3只能在2内移动。
      // 2：2图片 不全部铺满1 （即缩小时可以有一边出现空隙）
      // 3：2图片填充整个1
      crop(e) {
        console.log(e)
      }
    })
  }
}
</script>

<style>
#image-container {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
#my-image {
}
</style>
