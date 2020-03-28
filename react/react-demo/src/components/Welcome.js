import React from 'react'
class Welcome extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div id="wellcom-id">
                <h1>Welcome Component</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
export default Welcome
