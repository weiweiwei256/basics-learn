import React from 'react'
class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }

        // 当使用onClick = {this.handleClick}绑定事件时
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }
    // 实验性方法
    // handleClick = () => {
    //     console.log(this)
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn,
    //     }))
    // }
    handleClick() {
        console.log(this)
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
        }))
    }

    render() {
        // return <button onClick={this.handleClick()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        return (
            <button
                onClick={() => {
                    this.handleClick()
                }}
            >
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}
export default Toggle
