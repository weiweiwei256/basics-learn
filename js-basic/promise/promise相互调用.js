var p1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("fail");
  }, 3000);
});

let p2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log(p1);
    resolve(p1);
  }, 1000);
});

p2.then(result => console.log(result));
