import React from 'react'
import Welcome from './Welcome'
import './MyContainer.css'
class MyContainer extends React.Component {
    render() {
        return (
            <div className='container-style'>
                <h6>This is my container</h6>
                <Welcome name="container" />
            </div>
        )
    }
}
export default MyContainer
