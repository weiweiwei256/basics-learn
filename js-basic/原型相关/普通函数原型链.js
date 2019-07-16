function Person(a = "name") {
  console.log(a);
}
console.log(Person);
console.log(Person.prototype);
console.log(Person.prototype.constructor===Person);
console.log(Person.__proto__)
console.log(Function.prototype)

console.log(Person.prototype.__proto__===Object.prototype);
console.log(Person.__proto__===Function.prototype)
