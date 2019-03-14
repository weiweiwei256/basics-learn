var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function() {
    var that = this;
    console.log(this); // object
    return function() {
      console.log(this); // window
      return that.name;
    };
  }
};
console.log(object.getNameFunc()());
