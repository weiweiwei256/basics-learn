import React from 'react'
class TimeCpt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString(),
      interval: null,
    }
  }
  componentDidMount() {
    let interval = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
        interval: interval,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}.</h2>
      </div>
    )
  }
}
export default TimeCpt
