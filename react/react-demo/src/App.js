import React from 'react'
import './App.css'
// import './components/Hello.js'
// import MyContainter from './components/MyContainer'
import './components/Welcome'
import Welcome from './components/Welcome'
function App() {
    function formatUser(user) {
        return user.firstName + ' ' + user.lastName
    }
    const user = {
        firstName: 'wei',
        lastName: 'yajun',
    }
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
                <Welcome name={formatUser(user)}/>
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
            <Hello
                onClick={() => {
                    handleClick(this)
                }}
            ></Hello>
        </div>
    )
}

export default App
