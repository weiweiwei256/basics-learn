<template>
  <div id="canvas-demo">
    canvas-demo
    <!-- <img ref="img" src="/static/assets/黑白的副本.jpg" /> -->
    <!--  若不设置大小  img 展示图片默认大小 -->
    <img ref="img" src="/static/assets/161753_2021-04-14-15-18_simulation.jpg" />
    <canvas ref="canvas" class="canvas-style" width="200" height="100" style="border: 1px solid #000000"> </canvas>
  </div>
</template>

<script>
export default {
  name: 'canvas-demo',
  data: function () {
    return {
      canvas: undefined,
      ctx: undefined,
    }
  },
  watch: {},
  methods: {},
  mounted() {
    this.canvas = this.$refs.canvas
    console.dir('this.canvas', this.canvas)
    this.ctx = this.canvas.getContext('2d')
    this.ctx.mozImageSmoothingEnabled = this.smooth
    this.ctx.imageSmoothingEnabled = this.smooth
    this.ctx.webkitImageSmoothingEnabled = this.smooth
    this.ctx.fillStyle = 'blue'
    this.ctx.fillRect(0, 0, 150, 75)
  },
}
</script>

<style>
#canvas-demo {
  width: 100%;
  height: 100%;
}
.canvas-style {
  display: block;
  /* class width height的优先级比  width height的属性优先级高 */
  width: 400px;
  /* height: 800px; */
  width: 100%;
}
</style>
