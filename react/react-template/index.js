// react：react 是React库的入口点
import * as React from './node_modules/react/index.js'
// react-dom：提供了针对DOM的方法，比如：把创建的虚拟DOM，渲染到页面上
import * as ReactDom from './node_modules/react-dom/index.js'
console.error(`-------------------index.js running----------------------`);
const divVD = React.createElement('div',{
    title:'div visual dom title'
},"Hello react")
ReactDom.render(divVD,document.getElementById(app))
