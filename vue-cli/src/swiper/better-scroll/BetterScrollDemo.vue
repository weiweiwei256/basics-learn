<template>
  <div class="tab"
       ref="tab">
    <ul class="tab_content"
        ref="tabWrapper">
      <li class="tab_item"
          v-for="item in itemList"
          ref="tabitem">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
 <script>
import BScroll from 'better-scroll'
export default {
  name: 'better-scroll-demo',
  data() {
    return {
      itemList: [
        {
          title: '关注'
        },
        {
          title: '推荐'
        },
        {
          title: '深圳'
        },
        {
          title: '视频'
        },
        {
          title: '音乐'
        }
      ]
    }
  },
  created() {
    this.$nextTick(() => {
      this.InitTabScroll()
    })
  },
  methods: {
    InitTabScroll() {
      let width = 0
      for (let i = 0; i < this.itemList.length; i++) {
        width += this.$refs.tabitem[0].getBoundingClientRect().width //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
      }
      this.$refs.tabWrapper.style.width = width + 'px'
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.tab, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
  }
}
</script>
 <style  scoped>
.tab {
  width: 100px;
  overflow: hidden;
  padding: 5px;
}
.tab_content {
  line-height: 2rem;
  display: flex;
}
.tab_item {
  flex: 0 0 100px;
}
</style>
