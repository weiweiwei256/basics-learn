console.log('load my class')
class MyClass {
    constructor(fn) {
        this.name = 'my class name'
        this.fn = fn
        this.fn.call(this)
    }
    test() {
        console.log(this)
    }
}
