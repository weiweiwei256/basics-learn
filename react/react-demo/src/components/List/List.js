import React from 'react'
class List extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4, 5]
        const listItems = numbers.map((number, index) => (
            <p key={index}>{'This is a list render:' + number}</p>
        ))
        return (
            <div>
                <div>{listItems}</div>
                <h1>this is a Test</h1>
            </div>
        )
    }
}
export default List
