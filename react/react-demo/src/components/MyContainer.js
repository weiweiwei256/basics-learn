import React from 'react'
import Welcome from './Welcome'
import './MyContainer.css'
class MyContainer extends React.Component {
    render() {
        const welcome = <Welcome name="welcome in container" />
        const welcomes  = Array(3).fill(welcome);
        return (
            <div className='container-style'>
                <h6>This is my container</h6>
                <Welcome name="container" />
                <h6>以变量的形式引入组件</h6>
                {welcomes}
                <h6>表达式与组连用</h6>
                {true&&<Welcome name="container" />}
            </div>
        )
    }
}
export default MyContainer
