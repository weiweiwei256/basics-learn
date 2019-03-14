function f1() {
  var n = 999;
  return function f2() {
    console.log(n); // 999
  };
}
f1()();
