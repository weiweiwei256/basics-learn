<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app1,
#app2 {
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  display: inline-block;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}


.split p,
.split-flex p {
  padding: 20px;
}

.split,
.split-flex {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  overflow-y: auto;
  overflow-x: hidden;
}

.api {
  height: 250px;
  border: 1px solid #ddd;
  border-radius: 4px;
}


.gutter {
  background-color: #eee;

  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-horizontal {
  background-image: url('../static/grips/vertical.png');
  cursor: ew-resize;
}

.gutter.gutter-vertical {
  background-image: url('../static/grips/horizontal.png');
  cursor: ns-resize;
}

.split.split-horizontal,
.gutter.gutter-horizontal {
  height: 100%;
  float: left;
}
</style>
