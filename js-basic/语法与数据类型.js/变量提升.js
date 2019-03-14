console.log(x === undefined); // true
var x = 3;

/**
 * 例子2
 */
// will return a value of undefined
var myvar = "my value";
// console.log(this);
(function() {
  console.log(this);
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();
