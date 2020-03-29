import React from 'react'
class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form id='form'>
                <label>
                    名字:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}
export default Form
