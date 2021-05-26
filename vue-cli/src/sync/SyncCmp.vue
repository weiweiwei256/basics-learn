<template>
  <div id="sync-cmp">
    <p>sync cmp</p>
    <el-input :value="value" @input="handleInput"></el-input>
    <!-- <el-button @click="handleTest">test</el-button> -->
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'SyncDemo',
  props: ['value'],
  data() {
    return {}
  },
  mounted() {},
  methods: {
    handleTest() {
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
