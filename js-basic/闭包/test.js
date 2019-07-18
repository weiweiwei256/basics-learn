var name = 'The Window'

var object = {
  name: 'My Object',
  getNameFunc: function() {
    return function() {
      console.log(this.name)
    }
  },
}

object.getNameFunc().apply(object)
