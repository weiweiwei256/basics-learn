<template>
  <div id="vant-demo" ref="container">
    <p>vant-demo</p>
    <div class="container">
      <div class="test-container">
        <van-sticky>
          <van-button type="primary">基础用法</van-button>
        </van-sticky>
        <van-sticky :offset-top="300">
          <van-button type="info">吸顶距离</van-button>
        </van-sticky>
        <div ref="container" style="height: 150px;background-color:red">
          <van-sticky :container="container">
            <van-button type="warning">指定容器</van-button>
          </van-sticky>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Sticky } from 'vant'
export default {
  name: 'vant-demo',
  components: {
    'van-button': Button,
    'van-sticky': Sticky
  }
}
</script>

<style>
#vant-demo {
  height: 100%;
}
.container {
  height: 150%;
  background-color: blue;
}
.test-container {
  height: 400px;
  background-color: green;
}
</style>
