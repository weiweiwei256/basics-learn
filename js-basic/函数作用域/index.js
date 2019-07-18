function a() {
  for (var i = 0; i < 2; i++) {
    console.log(i)
    var name = 'wei'
  }
  console.log(i)
  console.log(name)
  console.log(this.name)
}
a()
