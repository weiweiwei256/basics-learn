async function a(i) {
  setTimeout(() => {
    console.log(new Date(), i);
  }, 1000);
}
for (var i = 0; i < 5; i++) {
  await a(i);
}
