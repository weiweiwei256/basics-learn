var obj = {
  name: "wei",
  age: 26,
  dd: function() {
    console.log("sdfsf");
  }
};
console.log(Object.getOwnPropertyNames(obj));
console.log(Reflect.ownKeys(obj));
