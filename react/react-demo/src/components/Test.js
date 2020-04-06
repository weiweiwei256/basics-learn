
import React from 'react'

function Test() {
    function setTheme(theme) {
        console.log(`set theme${theme}`)
    }
    return (
        <div>
            <button onClick={() => setTheme('dark')}>set theme</button>
        </div>
    )
}
export default Test

