<template>
  <div id="canvas-demo">
    canvas-demo
    <!-- <img ref="img" src="/static/assets/黑白的副本.jpg" /> -->
    <!--  若不设置大小  img 展示图片默认大小 -->
    <!-- loading = lazy 延迟加载图像，直到它和视口接近到一个计算得到的距离，由浏览器定义。 -->
    <el-button @click="handleDraw">draw</el-button>
    <el-button @click="test">test</el-button>
    <div></div>
    <canvas ref="canvas" width="800" style="border: 1px solid #000000"> </canvas>
    <!-- <img ref="img" class="image-style2" src="/static/assets/161753_2021-04-14-15-18_simulation.jpg" loading="lazy" /> -->
    <img ref="img" src="/static/assets/1111.jpg" loading="lazy" />
    <img ref="img1" class="image-style1" src="/static/assets/161753_2021-04-14-15-18_simulation.jpg" loading="lazy" />
  </div>
</template>

<script>
export default {
  name: 'canvas-demo',
  data: function () {
    return {
      canvas: undefined,
      ctx: undefined,
      cHeight: 400,
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
      this.cHeight += 100
      // 设置属性 或者通过canvas.height设置效果相同
      this.$refs.canvas.height = 800
    },
  },
  mounted() {
    this.canvas = this.$refs.canvas
    console.dir(this.canvas)
    this.imgDom = this.$refs.img
    console.dir(this.imgDom)
    this.ctx = this.canvas.getContext('2d')
    // this.ctx.mozImageSmoothingEnabled = this.smooth
    // this.ctx.imageSmoothingEnabled = this.smooth
    // this.ctx.webkitImageSmoothingEnabled = this.smooth
  },
}
</script>

<style>
#canvas-demo {
  width: 100%;
  height: 100%;
}
.image-style {
}
.image-style2 {
  width: 100%;
  height: 500px;
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
