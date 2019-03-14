var one = { x: 1 };
var two = new Object();
console.log(one.__proto__ === Object.prototype); // true
console.log(two.__proto__ === Object.prototype); // true
console.log(one.toString === one.__proto__.toString); // true
var fun = function() {
  this.name = "wei";
  console.log("aa");
};
console.log(fun.prototype);
console.log(fun.prototype.constructor);
console.log(fun.prototype.constructor.toString());
console.error("-------------------------------------------------------------");
console.log(Function.prototype.__proto__);
console.log(Object.prototype);
console.log(Function.prototype.__proto__);
console.log(Object.prototype);
