import React from 'react'
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value)
    event.preventDefault()
  }
  handleClear() {
    this.setState(state => ({
      value: '',
    }))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            名字:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="提交" />
        </form>
        <button onClick={() => this.handleClear()}>clear</button>
      </div>
    )
  }
}
export default NameForm
