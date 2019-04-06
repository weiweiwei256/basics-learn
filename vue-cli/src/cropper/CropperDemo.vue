<template>
  <div id='cropper-demo'>
    <div id='image-container'>
      <img id='my-image'
           src='./demo.png' />
    </div>
    <button @click='getSomeData'>get data</button>
    <button @click='handleCrop'>crop</button>
    <div id='cropper-preview'></div>
    <div id='result'></div>
  </div>
</template>
<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
export default {
  name: 'cropper-demo',
  data: function() {
    return {
      cropper: undefined
    }
  },
  methods: {
    getSomeData: function() {
      let containerData = this.cropper.getContainerData() //container data
      console.log('container data', containerData)
      let canvasData = this.cropper.getCanvasData() // canvas 相对container的数据
      console.log('canvas data', canvasData)
      let imageData = this.cropper.getImageData(true) // left,top 都为0  ???
      console.log('image data', imageData)
      let cropBoxData = this.cropper.getCropBoxData() // 剪切框相对于container的位置
      console.log('cropBox data', cropBoxData)
      let cropperData = this.cropper.getData(true) // 剪切框相对于图片的数据
      console.log('cropper data', cropperData)
    },
    handleCrop: function() {
      let cropImage = this.cropper.getCroppedCanvas('width') //剪切框相对图片的canvas
      console.dir(cropImage)
      let base64url = cropImage.toDataURL('image/png')
      console.log(base64url) //生成base64图片的格式
      // cropImage.toBlob(function(e) {   ???
      //   console.log(e) //生成Blob的图片格式
      // })
      $('#result').html(cropImage) //在body显示出canvas元素
    }
  },
  mounted: function() {
    // https://blog.csdn.net/weixin_38023551/article/details/78792400  to detail
    let image = document.querySelectorAll('#my-image')[0]
    this.cropper = new Cropper(image, {
      aspectRatio: 1,
      // 类型:number；默认：NAN；在默认的时候。可以随意改变裁剪框的大小；
      viewMode: 0,
      // 类型:number；默认：0；可以使用0,1,2,3；
      // 0：没有限制，3可以移动到2外。
      // 1 : 3只能在2内移动。
      // 2：2图片 不全部铺满1 （即缩小时可以有一边出现空隙）
      // 3：2图片填充整个1
      dragMode: 'move',
      // 类型: String
      // 默认: ‘crop’
      // 选项:
      // ‘crop’: 可以产生一个新的裁剪框3
      // ‘move’: 只可以移动3
      // ‘none’: 什么也不处理
      // preview: '#cropper-preview',
      // 预览:变换联动与查看，只是通过transform和overflow:hidden
      responsive: true,
      //在调整窗口大小的时候重新渲染cropper   ???
      //类型：Boolean 默认：true
      restore: true,
      // 在调整窗口大小后恢复裁剪的区域。 ???
      // 类型：Boolean 默认：true；
      checkCrossOrigin: true,
      // 检查当前图像是否为跨域图像。
      // 类型：Boolean 默认：true；
      modal: true,
      // 显示图片上方的黑色模态并在裁剪框下面。
      // 类型：Boolean 默认：true；
      guides: false,
      // 显示在裁剪框上方的虚线。
      // 类型：Boolean 默认：true；
      center: true,
      // 裁剪框在图片正中心。 ???
      // 类型：Boolean 默认：true；
      highlight: false,
      // 在裁剪框上方显示白色的区域(突出裁剪框)。  ???
      // 类型：Boolean 默认：true；
      background: true,
      // 显示容器的网格背景。（就是后面的马赛克）
      // 类型：Boolean 默认：true；
      autoCrop: true,
      // 当初始化时，可以自动生成图像。（就是自动显示裁剪框，改成false裁剪框自动消失）
      // 类型：Boolean 默认：true；
      // 双击开始新的截图
      autoCropArea: 0.8,
      // 定义自动裁剪面积大小(百分比)和图片进行对比。
      // 类型：number 默认：0.8
      movable: true,
      // 是否允许可以移动后面的图片
      // 类型：Boolean 默认：true；
      rotatable: true,
      // 是否允许旋转图像。   ??? 不知如何触发旋转
      // 类型：Boolean 默认：true；
      scalable: true,
      // 是否允许缩放图像。  ??? 无效？  与zoomable有啥关系
      // 类型：Boolean 默认：true；
      zoomable: true,
      // 是否允许放大图像。
      // 类型：Boolean 默认：true；
      zoomOnTouch: true,
      // 是否可以通过拖动触摸来放大图像。  ???无效
      // 类型：Boolean 默认：true；
      zoomOnWheel: true,
      // zoomOnWheel–是否可以通过移动鼠标来放大图像。
      // 类型：Boolean 默认：true；
      wheelZoomRatio: 0.1,
      // –用鼠标移动图像时，定义缩放比例。
      // 类型：Number 默认：0.1；
      cropBoxMovable: false,
      // —是否通过拖拽来移动剪裁框。
      // 类型：Boolean 默认：true；
      cropBoxResizable: false,
      // —是否通过拖动来调整剪裁框的大小。
      // 类型：Boolean 默认：true；
      toggleDragModeOnDblclick: false,
      //—当点击两次时可以在“crop”和“move”之间切换拖拽模式，
      // 类型：Boolean 默认：true；
      minContainerWidth: 200,
      //容器的最小宽度
      // 类型：Number 默认：200；
      minContainerHeight: 200,
      // —容器的最小高度。
      // 类型：Number 默认：100；
      minCanvasWidth: 200,
      //       的最小宽度。
      // 类型：Number 默认：0；
      // 控制图片的缩放的最小大小
      minCanvasHeight: 200,
      // minCanvasHeight—canvas的最小高度。
      // 类型：Number 默认：0；
      minCropBoxWidth: 300,
      // —裁剪层的最小宽度。
      // 类型：Number 默认：0；
      minCropBoxHeight: 300,
      // minCropBoxHeight—裁剪层的最小高度。
      // 类型：Number 默认：0；
      ready: e => {
        // console.log('ready')
        // methods invoke
        // cropper.clear()
        // image.cropper.clear()
        this.cropper.zoomTo(1.1) // >1 是缩小
        // this.cropper.setData({ y: 10, x: 10 }) // 改变剪切框相对与图片的数据
        // cropper.rotate(90)
      },

      // 剪切框与图片发生移动时都会触发 监听事件
      // 插件准备完成执行的函数（只执行一次）。
      cropstart(e) {
        // console.log('crop start')
      },
      // —剪裁框开始移动执行的函数。
      cropmove(e) {
        // console.log('crop move')
      },
      // cropmove—剪裁框移动时执行的函数。
      cropend: e => {
        // console.log('crop end')
      },
      // cropend—剪裁框移动结束执行的函数。
      crop(e) {
        // console.log('crop')
      },
      // 剪裁框发生变化执行的函数。  ??? 与crop move的差异
      zoom(e) {
        // console.log('zoom')
      }
      // —剪裁框缩放的时候执行的函数。
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
#cropper-preview {
  width: 300px;
  height: 300px;
  overflow: hidden;
}
#my-image {
}
</style>
