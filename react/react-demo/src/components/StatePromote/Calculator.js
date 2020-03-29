import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}
class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
        }
    }
    handleChange(val, scale) {
        this.setState({ temperature: tryConvert(val, scale === 'f' ? toCelsius : toFahrenheit) })
    }
    render() {
        const temperature = this.state.temperature
        return (
            <fieldset>
                <TemperatureInput
                    scale="f"
                    onTemperatureChange={val => {
                        this.handleChange(val, 'f')
                    }}
                ></TemperatureInput>
                <TemperatureInput
                    scale="c"
                    onTemperatureChange={val => {
                        this.handleChange(val, 'c')
                    }}
                ></TemperatureInput>
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}
export default Calculator
