<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted:function(){
    console.log('app mounted')
  }
}
</script>

<style>
#app1,
#app2 {
  width: 500px;
  height: 500px;
  display: inline-block;
}
body {
  height: 100%;
}
* {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  height: 100%;
}
</style>
