import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
function Toolbar(props) {
    function showTheme(theme) {
        console.log(context)
        console.log(`show theme: ${theme}`)
    }
    const context = useContext(ThemeContext)
    console.log(context)
    return (
        <div>
            <button onClick={() => showTheme(props.theme)}>{context}</button>
        </div>
    )
}
export default Toolbar
