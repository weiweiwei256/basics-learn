var p1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("error");
    console.log(p1);
  }, 3000);
  console.log(p1);
});
