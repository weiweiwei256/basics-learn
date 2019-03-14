// 双等号将执行类型转换;
// 三等号将进行相同的比较，而不进行类型转换 (如果类型不同, 只是总会返回 false );
// 而Object.is的行为方式与三等号相同，但是对于NaN和-0和+0进行特殊处理
console.log(NaN === NaN); //false
console.log(Object.is(NaN, NaN)); //true
console.log(NaN == NaN); // false
console.log(1 == "1"); // true
console.log(1 === "1"); // false
console.log("---------------------------引用类型------------------------------");
// 对于任意两个不同的非原始对象，即便他们有相同的结构， 以上三个运算符都会计算得到 false 。
console.log({} == {});
console.log({} === {});
console.log(Object.is({}, {}));
var a = {};
console.log(a == a);
console.log(a === a);




