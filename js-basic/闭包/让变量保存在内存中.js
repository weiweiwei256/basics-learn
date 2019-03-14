function f1() {
  var n = 999;
  nAdd = function() {
    n += 1;
  };
  function f2(n) {
    console.log(n);
    return 4;
  }
  return f2;
}

console.log(f1()(3));
