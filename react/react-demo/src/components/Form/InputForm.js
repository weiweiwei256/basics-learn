import React from 'react'
class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }
    handleChange(e) {
        console.log(e);
        this.setState({ value: e.target.value })
    }
    handleSubmit(e) {
        console.log(`user input name:${this.state.value}`)
        e.preventDefault();
    }
    render() {
        return (
            <form
                id="form"
                onSubmit={(e) => {
                    this.handleSubmit(e)
                }}
            >
                <label>
                    名字:
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => {
                            this.handleChange(e)
                        }}
                    />
                </label>
                <p>user input:{this.state.value}</p>
                <input type="submit" value="提交" />
            </form>
        )
    }
}
export default InputForm
