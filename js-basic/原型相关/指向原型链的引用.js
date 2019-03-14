var instance = {};
function Person(a = "name") {
  this.name = a;
}
var instance = new Person("wei");
var defaultPerson = new Person();
console.log(instance);
console.log(defaultPerson);
console.error("--------------------prototype----------------------------------");
// 输出原型
console.log(instance.__proto__);
console.log(instance.prototype);
console.log(Person.prototype);
console.log(Person.__proto__.toString());
console.log(instance.constructor.prototype);
// 输出构造函数
console.error("---------------------signal---------------------------------");
console.log(instance.__proto__.constructor);
console.log(instance.constructor);
console.log(instance.constructor.prototype.constructor);
