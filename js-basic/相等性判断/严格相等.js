// 严格相等 ===
// 1 不进行类型隐式类型转换  如果类型不同 则不等
// 2 如果两个被比较的值类型相同，值也相同，并且都不是 number 类型时，两个值全等。
// 3 如果两个值都是 number 类型，当两个都不是 NaN，并且数值相同，或是两个值分别为 +0 和 -0 时，两个值被认为是全等的
var num = 0;
console.log(num === num); // true
console.log(+0 === -0); // true
console.log(NaN === NaN); //false
console.log({} === {}); // false
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
console.error("-------------------------------------------------------------");
var 数字 = 12;
// 他是否有爸爸呢？
console.log(数字.__proto__);
// 跟着我敲敲看。
var 数字1 = new Number(12);
console.log(数字);
console.log(数字1);
console.log(数字 == 数字1); // true
console.log(数字 === 数字1); // false
