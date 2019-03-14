let a = { name: "wei" };
let set = new Set();
set.add(a);
set.add();
console.log(set);
let set2 = new Set([1, 2, 3, 4]);
set2.forEach(item => {
  console.log(item);
});
for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
