<template>
  <div id="dom-to-img">
    <div id='content'>
    </div>
    <div id='child'></div>
    <div id='img-contaienr'>
      <img id='image' />
    </div>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image'
export default {
  name: 'dom-to-img',
  data: function() {
    return {}
  },
  mounted: function() {
    var node = document.getElementById('content')

    domtoimage
      .toPng(node)
      .then(function(dataUrl) {
        document.getElementById('image').src = dataUrl
      })
      .catch(function(error) {
        console.error('oops, something went wrong!', error)
      })
  }
}
</script>

<style>
#content {
  width: 400px;
  height: 400px;
  background-color: blue;
}
#child {
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: 250px;
  background-color: red;
}
#image {
  margin-top: 100px;
}
</style>
