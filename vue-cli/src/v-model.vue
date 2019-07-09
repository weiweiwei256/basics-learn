<template>
  <div>demo</div>
</template>

<script>
export default {
  name: 'demo',
  model: {
    prop: 'select',
    event: 'updateSelect'
  },
  props: {
    select: {
      type: String
    }
  },
  data: function() {
    return {}
  },
  mounted: function() {}
}
</script>

<style>
</style>
