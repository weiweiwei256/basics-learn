console.log(this)
var obj = {
  birth: 1990,
  getAge: function() {
    var b = this.birth; // 1990
    var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
    return fn();
  }
};
console.log(obj.getAge());
