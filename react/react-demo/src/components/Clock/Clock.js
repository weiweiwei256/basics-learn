import React from 'react'
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: new Date() }
    }
    /*   挂载卸载过程    */
    // 挂载前
    // componentWillMount() {}
    // 挂载后
    componentDidMount() {
        this.timeID = setInterval(() => {
            this.tick()
        }, 1000)
    }
    // 卸载前
    componentWillUnmount() {
        clearInterval(this.timeID)
    }

    // getDerivedStateFromProps() {}
    // componentWillReceiveProps() {}

    // getSnapshotBeforeUpdate() {}
    // componentWillUpdate() {}

    // componentDidUpdate() {}
    // componentDidCatch() {}

    tick() {
        this.setState({ time: new Date() })
    }
    render() {
        return (
            <div id="clock">
                {' '}
                <h5>This is a clock.</h5>
                <p>Time is {this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}
export default Clock
