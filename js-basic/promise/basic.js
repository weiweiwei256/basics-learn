function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, ms, "err");
  });
}

timeout(2000).then(
  value => {
    console.log(value);
  },
  err => {
    console.log(err);
  }
);
