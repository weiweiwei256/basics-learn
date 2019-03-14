function Father() {
  this.property = true;
}
Father.prototype.getFatherValue = function() {
  return this.property;
};
function Son() {
  this.sonProperty = false;
}
//继承 Father
Son.prototype = new Father(); //Son.prototype被重写,导致Son.prototype.constructor也一同被重写
Son.prototype.getSonVaule = function() {
  return this.sonProperty;
};
var instance = new Son();
console.log(instance.__proto__);
console.log(Son());
console.log(Son.prototype);
console.log(instance.constructor.prototype);
console.log(Son.prototype.constructor);
