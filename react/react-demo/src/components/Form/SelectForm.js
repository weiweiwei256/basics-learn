import React from 'react'
class SelectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'lime',
        }
    }
    handleChange(e) {
        console.log(e)
        this.setState({ value: e.target.value })
    }
    handleSubmit(e) {
        console.log(`user input name:${this.state.value}`)
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
                    名字:
                    <select
                        value={this.state.value}
                        onChange={e => {
                            this.handleChange(e)
                        }}
                    >
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <p>user input:{this.state.value}</p>
                <input type="submit" value="提交" />
            </form>
        )
    }
}
export default SelectForm
