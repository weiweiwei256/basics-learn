<template>
  <div id="sync-demo">
    <p>sync demo</p>
    <p>{{ outValue }}</p>
    <hr />
    <SyncCmp :value.sync="outValue" />
    <!-- <SyncCmp v-model="outValue" /> -->
  </div>
</template>

<script>
import SyncCmp from './SyncCmp'
export default {
  name: 'SyncDemo',
  components: { SyncCmp },
  data() {
    return {
      outValue: 'oldValue',
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
