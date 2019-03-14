const bar = Symbol("bar");
class Point {
  count = 0;
  constructor(x, y) {
    this.arg2 = "arg2";
    this.x = x;
    this.y = y;
  }
  [bar]() {
    console.log("this is a private func");
  }
  _unsafePraviteFun() {}
  toString() {
    this[bar]();
    return "(" + this.x + ", " + this.y + ")";
  }
}
let point = new Point();
console.log(point.toString());
console.log(point instanceof Point);
