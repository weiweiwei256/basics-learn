// 相等操作符比较两个值是否相等，在比较前将两个被比较的值转换为相同类型。
// 在转换后（等式的一边或两边都可能被转换），
// 最终的比较方式等同于全等操作符 === 的比较方式。 相等操作符满足交换律。
console.log(undefined == null); //true
console.log(undefined === null); // false
console.log({} == {}); //false
var a = { name: "1" };
console.log(1 == a);
// TODO:
// console.log(Symbol.toPrimitive(a));
console.log(true == 1);
console.log(false == 0);
console.log(0 == null);
console.log(parseInt("2.7"));
console.log(undefined == false);
console.log(undefined === false);
console.log(null == 0);
