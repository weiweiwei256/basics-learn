import React from 'react'
import FancyBorder from './FancyBorder'
function TitleBorder(props) {
    return (
        <FancyBorder {...props} title="固定title的border">
            {props.children}
        </FancyBorder>
    )
}
export default TitleBorder
