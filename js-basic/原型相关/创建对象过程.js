function Person(name = "name") {
  this.name = name;
}
function createPerson(name) {
  var obj = {};
  obj.__proto__ = Person.prototype;
  Person.call(obj, name);
  return obj;
}
let p = createPerson("weiyajun");
console.log(p);
