<template>
  <div id="better-scroll-demo">
    <div ref="scroll"
         direction="horizontal"
         autoplay='true'>
      <ul class="content">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'better-scroll-demo',
  data: function() {
    return {
      scroll: undefined
    }
  },
  mounted: function() {
    this.scroll = new BScroll(this.$refs.scroll,{
        scrollX: true,
          scrollY: false,
    })
    console.log(this.scroll)
  }
}
</script>

<style>
</style>
