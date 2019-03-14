function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve("success"), ms, "err");
  });
}

timeout(2000)
  .then(
    value => {
      console.log(value);
      return value;
    },
    err => {
      console.log(err);
    }
  )
  .then(value => {
    console.log(value);
    return;
  })
  .then(value => {
    console.log(value);
  });
