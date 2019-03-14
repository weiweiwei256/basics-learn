function Dog(name, color) {
  this.name = name;
  this.color = color;
}

Dog.prototype.bark = () => {
  console.log("wangwang~");
};

function Husky(name, color, weight) {
  Dog.call(this, name, color);
  this.weight = weight;
}
Husky.prototype = new Dog();
let h = new Husky();
console.log(h instanceof Dog);
