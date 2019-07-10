var jquery = require('jquery');
var child =require('./child.js')// 返回引用
exports.$ = jquery;
//module就是当前模块内部中的一个对象，代表当前对象
console.error('----------------test modules-------------------------')
console.log(module);        
console.log(module.require.toString())
console.log(require.resolve.toString())
console.log(require.main)
console.error('-----------------------------------------')
console.log(require.cache)
console.error('-----------------------------------------')
console.log(require.extensions)
console.log(require.extensions['.json'].toString())
console.log(global)  // 全局变量
console.error('-----------------------------------------')
console.log(process)
console.error('-----------------------------------------')
console.log(__filename)