import React from 'react'
import './Welcome.css'
class Welcome extends React.Component {
    // 设置默认props
    static defaultProps ={
        name:'default name'
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="wellcom-id" className='welcome-style'>
                <h6>Welcome Component</h6>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
export default Welcome
