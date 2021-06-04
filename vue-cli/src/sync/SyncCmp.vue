<template>
  <div id="sync-cmp">
    <p>sync cmp</p>
    <!-- <el-input :value="value" @input="handleInput"></el-input> -->
    <!-- <el-button @click="handleTest">test</el-button> -->
    <p>{{ value }}</p>
    <SubCmp :value="value" @update:value="handleUpdate"></SubCmp>
  </div>
</template>

<script>
import SubCmp from './SubCmp'
export default {
  name: 'SyncDemo',
  components: {
    SubCmp,
  },
  props: ['value'],
  data() {
    return {}
  },
  mounted() {},
  methods: {
    handleTest() {
      this.$emit('update:value', 'newVal')
    },
    handleUpdate(val) {
      console.info(`-----------sync cmp-----------`)
      console.log('val', val)
      this.$emit('update:value', val)
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
