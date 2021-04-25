<template>
  <div id="demo">
    demo
    <el-button @click="handleClick">test splice</el-button>
    <el-button @click="handleClick2">test push</el-button>
    <el-button @click="handleClick3">test varObj</el-button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data: function () {
    return {
      varObj: {
        a: 0,
        b: 1,
      },
      // arr: ['asdfasd', 'dddddd'],
      arr: [
        {
          a: 1,
        },
        {
          a: 2,
        },
      ],
    }
  },
  watch: {
    arr: {
      handler(newVal, oldVal) {
        console.log('newVal', newVal.length)
        console.log('oldVal', oldVal.length)
      },
      deep: true,
    },
    varObj: {
      handler(newVal, oldVal) {
        console.log('newVal', newVal)
        console.log('oldVal', oldVal)
      },
      deep: true,
    },
  },
  methods: {
    handleClick() {
      // const tmp = [...this.arr]
      // tmp.splice(0, 1)
      // this.arr = tmp

      // this.$delete(this.arr, 0)

      this.arr.splice(0, 1)
    },
    handleClick2() {
      const tmp = [...this.arr]
      tmp.push({ a: 3 })
      this.arr = tmp

      // this.arr.push({ a: 3 })
    },
    handleClick3() {
      console.log('this.varObj', this.varObj)
      this.varObj.a = this.varObj.a + 1
    },
  },
  mounted: function () {
    console.log('demo mounted')
  },
}
</script>

<style></style>
