function Fun(){
  console.log(this)
}
var a = new Fun()
var b = new Fun;
console.log(a)
console.log(b)
console.log(a===b)
console.log(b instanceof Fun)