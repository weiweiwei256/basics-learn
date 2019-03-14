var obj = {
  birth: 1990,
  getAge: function() {
    var b = this.birth; // 1990
    var fn = function() {
      console.log(this);
    };
    return fn();
  }
};
console.log(obj.getAge());
