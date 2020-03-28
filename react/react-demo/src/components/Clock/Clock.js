import React from 'react'
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: new Date() }
    }
    render() {
        return (
            <div id="clock">
                <h5>This is a clock.</h5>
                <p>Time is {this.state.time.toLocaleDateString()}</p>
            </div>
        )
    }
}
export default Clock
