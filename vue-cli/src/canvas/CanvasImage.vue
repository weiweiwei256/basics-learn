<template>
  <div id="canvas-image">
    <canvas ref="canvas" width="1800" height="800" style="border: 1px solid #000000; background-color: white"> </canvas>
    <!-- <img ref="img" class="image-style2" src="" loading="lazy" /> -->
  </div>
</template>

<script>
export default {
  name: 'canvas-image',
  data: function () {
    return {
      canvas: undefined,
    }
  },
  watch: {},
  methods: {
    handleDraw() {
      // 绘制
      const imgDom = this.$refs.img
      console.dir('imgDom', imgDom)
      console.log('imgDom.naturalWidth', imgDom.naturalWidth)
      console.log('imgDom.naturalHeight', imgDom.naturalHeight)

      console.log('this.canvas.clientWidth', this.canvas.clientWidth)
      console.log('this.canvas.clientHeight', this.canvas.clientHeight)
      this.ctx.drawImage(imgDom, 0, 0, imgDom.naturalWidth, imgDom.naturalHeight)
    },
    test() {
      // canvas height 修复会引起canvas已有的绘制消失 需要重新绘制
      // this.cHeight += 100
      // 设置属性 或者通过canvas.height设置效果相同
      // this.$refs.canvas.height = 800

      const img1 = this.$refs.img
      img1.src = ''
      setTimeout(() => {
        img1.src = '/static/assets/1111.jpg'
      }, 4000)
    },
    getImageposition(canvas, image) {
      const canvasRadio = canvas.width / canvas.height
      const imageRadio = image.width / image.height
      console.log('canvasRadio', canvasRadio)
      console.log('imageRadio', imageRadio)
      const position = {
        dx: 0,
        dy: 0,
        dh: canvas.height,
        dw: canvas.width,
      }
      // 宽度100% 填充  高度 居中
      if (canvasRadio <= imageRadio) {
        position.dh = canvas.width / imageRadio
        position.dy = (canvas.height - position.dh) / 2
      } else {
        // 高度100% 填充  水平 居中
        position.dw = canvas.height * imageRadio
        position.dx = (canvas.width - position.dw) / 2
      }
      return position
    },
  },
  mounted() {
    const image = new Image()
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')
    image.src = '/static/assets/plant.jpg'
    image.onload = () => {
      console.log('image.width', image.width)
      console.log('image.height', image.height)
      console.log('this.canvas.width', this.canvas.width)
      console.log('this.canvas.height', this.canvas.height)
      const position = this.getImageposition(this.canvas, image)
      console.log('position', position)
      const { dx, dy, dw, dh } = position
      //developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage
      this.ctx.drawImage(image, dx, dy, dw, dh)
    }
  },
}
</script>

<style>
#canvas-image {
  margin-top: 50px;
  width: 100%;
  height: 100%;
}
.canvas-style {
  display: block;
  /* 
  * class width height的优先级比  width height的属性优先级高 
  * 布局是先基于width,height属性进行绘制 然后再基于css width,height进行缩放
  *
  */
  width: 900px;
  /* height: 800px; */
  width: 100%;
}
</style>
