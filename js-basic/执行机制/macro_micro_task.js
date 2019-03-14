setTimeout(function() {
  console.log("setTimeout");
});

new Promise(function(resolve) {
  console.log("promise");
  resolve();
}).then(function() {
  console.log("then");
});

console.log("console");
