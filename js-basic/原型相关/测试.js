function Base(name) {
  this.sex = 0;
  this.name = name || "base";
  this.hello = function() {
    console.log("hello " + name);
  };
}
Base.prototype.say = function() {
  console.log("name:" + this.name);
};
function Extend(name, num) {
  //让Base能初始化属性
  Base.call(this, name);
  this.num = num || 0;
  console.error("-------------------------------------------------------------");
  console.log(this);
  console.log(this.__proto__.constructor == Extend);
}
//注意,这里是new Base()而不是Base.prototype
//因为new Base()是新建了一个对象,这样可以不会影响到Base.prototype
//否则如果直接操作Base.prototype,会污染Base.prototype
Extend.prototype = new Base();
//前面由于将prototype变为了new Base()所以构造方法默认是Base的
//这里需要手动替换回来
Extend.prototype.constructor = Extend;

var one = new Extend("one", 2);

console.log(Extend.__proto__ === Function.__proto__);
console.log(Extend.__proto__ === Object.__proto__);
console.log(one.__proto__.constructor.__proto__ === Object.__proto__);
console.log(one.constructor);
console.log(one.__proto__ === Extend.prototype);
console.log(one.prototype);
