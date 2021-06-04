<template>
  <div id="sub-cmp">
    <p>sub cmp</p>
    <el-button @click="handleTest">click</el-button>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'SubDemo',
  props: ['value'],
  data() {
    return {}
  },
  mounted() {},
  methods: {
    handleTest() {
      console.info(`-----------subCmp-----------`)
      this.$emit('update:value', 'newVal')
    },
    handleInput(val) {
      console.log('val', val)
      // 相应 value.sync
      this.$emit('update:value', val)
      // 相应v-model
      this.$emit('input', val)
    },
  },
}
</script>

<style scoped></style>
