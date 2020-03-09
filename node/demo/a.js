function str() {
    console.log('str方法')
}

let arr = [1, 2, 3]

let targetObj = {
    a: 'obj对象',
}
//导出数据
// 方法一：module.exports的形式
module.exports = {
    str,
    arr,
    targetObj,
}
// 方法二：exports的形式
exports.str = str
exports.arr = arr
exports.targetObj = targetObj
//错误形式  因为exports和module.exports指向同一个内存 exports重新赋值为新对象 两者之前就不存在关系
//并且 require()返回的是module.exports而不是exports 所以这样写的话打印出的值都是undefined的
exports = {
    str,
    arr,
    targetObj,
}
