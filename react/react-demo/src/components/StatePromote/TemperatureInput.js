import React from 'react'
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
}
class TemperatureInput extends React.Component {
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }
    render() {
        const temperature = this.props.temperature
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
                <input
                    value={temperature}
                    onChange={e => {
                        this.handleChange(e)
                    }}
                />
            </fieldset>
        )
    }
}
export default TemperatureInput
