<template>
  <div id="debounce">
    <el-button ref="btn" @click="handleClick">debounce</el-button>
    <el-button ref="btn2" @click="handleTest" v-debounce-click="() => handleClick(data1)">directive debounce</el-button>
  </div>
</template>

<script>
import { debounce } from 'throttle-debounce'
export default {
  name: 'debounce-throttle',
  data: function () {
    return {
      data1: 'data1',
    }
  },
  watch: {},
  methods: {
    handleClick() {
      console.log(this)
      console.info(`-----------click-----------`)
    },
    handleTest() {
      console.info(`-----------handle test-----------`)
    },
  },
  // 如何避免立即执行
  directives: {
    'debounce-click': {
      //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      bind: function (el, binding, vnode) {
        console.log('el', el)
        console.log('binding', binding)
        console.log('vnode', vnode)
        const { arg, value } = binding
        let debounceTime = 500
        if (arg && parseInt(arg) !== NaN) {
          debounceTime = parseInt(arg)
        }
        console.log('debounceTime', debounceTime)
        const debounceHandle = debounce(debounceTime, true, binding.value)
        el.addEventListener('click', (...arg) => debounceHandle(...arg), true)
      },
      // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
      inserted: function (el) {
        console.log('el', el)
      },
      //  所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
      update: function () {},
      // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
      componentUpdated() {},

      // 只调用一次，指令与元素解绑时调用。
      unbind() {},
    },
  },
  mounted() {
    console.log('this.$refs.btn', this.$refs.btn)
    console.log('this.$refs.btn2', this.$refs.btn2)
  },
}
</script>

<style></style>
