import React from 'react'
import PropTypes from 'prop-types';
import './Welcome.css'
class Welcome extends React.Component {
    // 设置默认props
    static defaultProps ={
        name:'default name'
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
Welcome.propTypes = {
    name: PropTypes.string
  };