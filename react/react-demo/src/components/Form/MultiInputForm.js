import React from 'react'
class MultiInputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input1Value: true,
            input2Value: 'default',
        }
    }
    handleChange(e) {
        let t = e.target
        console.log(t.name)
        console.log(t.value)
        this.setState({ [t.name]: t.type === 'checkbox' ? t.checked : t.value })
    }
    handleSubmit(e) {
        console.log(`user input:${this.state.toString()}`)
        e.preventDefault()
    }
    render() {
        return (
            <form
                id="form"
                onSubmit={e => {
                    this.handleSubmit(e)
                }}
            >
                <label>
                    checkbox:
                    <input
                        type="checkbox"
                        name="input1Value"
                        checked={this.state.input1Value}
                        onChange={e => {
                            this.handleChange(e)
                        }}
                    />
                </label>
                <label>
                    checkbox:
                    <input
                        type="text"
                        name="input2Value"
                        value={this.state.input2Value}
                        onChange={e => {
                            this.handleChange(e)
                        }}
                    />
                </label>
                <p>user input1 value:{this.state.input1Value.toString()}</p>
                <p>user input2 value:{this.state.input2Value}</p>
                <input type="submit" value="提交" />
            </form>
        )
    }
}
export default MultiInputForm
