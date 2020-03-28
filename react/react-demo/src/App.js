import React from 'react'
import './App.css'
// import './components/Hello.js'
import MyContainter from './components/MyContainer'
import Welcome from './components/Welcome'
import Clock from './components/Clock/Clock'
function App() {
    function formatUser(user) {
        return user.firstName + ' ' + user.lastName
    }
    const user = {
        firstName: 'wei',
        lastName: 'yajun',
    }
    // 
    const Hello = props => {
        const jsxObj = (
            <div
                key="div_key"
                className="div-class"
                id="div_id"
                normal-prop="normal-prop"
                number-props="0"
                number2-props={0}
                // numberProps2="0"   需要小写
                arg-props={user.lastName}
                onClick={() => {
                    props.onClick()
                }}
            >
                <h1>hello world,by {formatUser(user)}</h1>
                
            </div>
        )
        console.log(jsxObj)
        return jsxObj
    }
    function handleClick(a) {
        console.log(this)
        console.log(a)
    }
    return (
        <div className="App">
                <h3>state属性</h3>
                <Clock />
                <h3>函数组件调用</h3>
            <Hello
                onClick={() => {
                    handleClick(this)
                }}
            ></Hello>
                <h3>普通class组件调用</h3>
                <Welcome name={formatUser(user)}/>
                <h3>class组件默认值测试</h3>
                <Welcome />
                <h3>容器测试</h3>
                <MyContainter />
        </div>
    )
}

export default App
