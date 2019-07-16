var p = {};
// function Person(a = "name") {
//   this.name = a;
// }
// var Person = new Function();
// var Person = function(a = "name") {
//   this.name = a;
// };
var Person = new Function("this.name=(a='test')")
var p = new Person("wei");
var defaultPerson = new Person();
console.log(Person);
console.log(defaultPerson);
console.log(p);
console.log(Function);
console.error(
  "--------------------Person & p----------------------------------"
);
// 输出原型
console.log(p.__proto__);
console.log(Person.prototype);
console.log(Person.prototype === p.__proto__);
console.log(p.constructor === Person);
console.log(p.constructor.prototype === Person.prototype);

console.log(p.__proto__.__proto__ === Object.prototype);
// 输出构造函数
console.error(
  "---------------------Person&Function---------------------------------"
);
console.log(Person.__proto__);
console.log(Person.__proto__.toString());
console.log(Person.__proto__ === Function.prototype);
console.error(
  "-------------------------Function&Object------------------------------------"
);
var a = { data: "yajun" };
console.log(Object);
console.log(a.__proto__ === Object.prototype);
console.log(Object.prototype);
console.log(Function.prototype);
console.log(Object.__proto__);
console.log(Object.prototype.__proto__);
console.log(Object.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.__proto__);
console.log(Function.prototype === Function.__proto__);
