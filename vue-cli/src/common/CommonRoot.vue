<template>
  <div id="common-root-container">
    <CommonSelect :options="options" v-model="selectModel"> </CommonSelect>
  </div>
</template>

<script>
import CommonSelect from './CommonSelect'
export default {
  name: 'common-root',
  data: function () {
    return {
      selectModel: 'apple',
      options: ['apple', 'pearl', 'orange'],
    }
  },
  watch: {
    selectModel: function (newVal, oldVal) {
      console.log('newVal', newVal)
      console.log('oldVal', oldVal)
    },
  },
  components: {
    CommonSelect,
  },
}
</script>

<style></style>
