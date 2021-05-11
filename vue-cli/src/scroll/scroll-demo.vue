<template>
  <div id="scroll-demo">
    <h3>scroll demo</h3>
    <!-- 滚动条测试 -->
    <div class="parent">
      <div class="child"></div>
    </div>
    <!-- span 撑大父亲test  -->
    <div class="parent2">
      <span class="child2">
        asdfasdfasdf assdfasdfa dfsdfasdfaf asd f afdas dfasdfasdfa assdfasdfa df asdfsdfasdfasdfa as dfasadfasdfasdfa
        dfasdfasdf sdf asd
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scroll-demo',
  data: function () {
    return {}
  },
  watch: {},
  methods: {},
  mounted() {},
}
</script>

<style scoped>
.parent {
  margin: 0 auto;
  width: 500px;
  height: 500px;
  border: 1px solid red;
  overflow-y: scroll;
  overflow: -moz-scrollbars-vertical;
}
.parent::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
.parent::-webkit-scrollbar:vertical {
  width: 21px;
}
.parent::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
.child {
  margin: 0 auto;
  width: 300px;
  height: 1000px;
  background-color: aqua;
  border: 1px solid yellow;
}
.parent2 {
  margin: 0 auto;
  width: 100px;
  height: 20px;
  border: 1px solid red;
}
.child2 {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
