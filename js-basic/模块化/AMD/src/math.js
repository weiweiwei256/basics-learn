define(function() {
  console.log('math loaded')
  var add = function(a, b) {
    return a + b
  }
  return {
    add: add,
  }
})
