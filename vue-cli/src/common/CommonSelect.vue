<template>
  <div class="common-select-container">
    <el-select clearable :value="modelVal" @change="handleChange" :placeholder="placeholder" :multiple="multiple">
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.label ? item.label : item"
        :value="item.value ? item.value : item"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'CommonSelect',
  model: {
    prop: 'modelVal', //指向props的参数名
    event: 'change', //事件名称
  },
  props: {
    modelVal: [String, Array],
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    handleChange(item) {
      this.$emit('change', item)
    },
  },
}
</script>

<style>
.el-select .el-input {
  overflow: scroll;
  padding-bottom: 1px;
}
</style>
