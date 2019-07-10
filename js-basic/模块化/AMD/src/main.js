console.log('This is main js')
require(['math'], function(math) {
  var mainAdd = function(a, b) {
    return math.add(a, b)
  }
  var init = function() {
    var btnDom = document.getElementById('btn')
    btnDom.addEventListener('click', function() {
      console.log(mainAdd(1,3))
      
    })
  }
//   init()
  return {
    mainAdd: mainAdd,
  }
})
