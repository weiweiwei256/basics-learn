var numbers = [5, 6, 7, 8];

function getSum(total, num) {
  return total + num;
}
numbers.reduce((total, item, index) => {
  console.log(total);
  console.log(item);
  console.log(index);
});
console.log(
  numbers.reduce((a, b) => {
    console.log(a);
    return a + b;
  })
);
