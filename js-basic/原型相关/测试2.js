function Parent() {
  this.a = 1;
  this.b = [1, 2, this.a];
  this.c = { demo: 5 };
  this.show = function() {
    console.log(this.a, this.b, this.c.demo);
  };
}
function Child() {
  this.a = 2;
  this.change = function() {
    this.b.push(this.a);
    this.a = this.b.length;
    this.c.demo = this.a++;
  };
}
Child.prototype = new Parent();
var parent = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.a = 11;
child2.a = 12;
child1.show();
child2.show();
child1.change();
child2.change();
child1.show();
child2.show();
console.log(Child.prototype.constructor == Parent);
