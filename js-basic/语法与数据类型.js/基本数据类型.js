var ary = [1, 23, 4];
console.log(ary.__proto__.constructor == Array); //true
console.log(ary.constructor == Array);
console.log(Array.prototype.constructor);
console.log(ary.__proto__.constructor);
console.error("-------------------------------------------------------------");
console.log(ary.prototype);
// console.log(ary.toString());
// console.log(ary.__proto__.toString() == "[Object Array]");
console.log(Object.prototype.toString.call(ary));

