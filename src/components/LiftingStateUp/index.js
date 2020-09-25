import React from 'react';

// ----- Lifting State Up
// Often, several components need to reflect the same changing data. 
// We recommend lifting the shared state up to their closet common ancestor. 
function BoilingVerdict(props) {
    const temp = props.temperature;
    if (temp >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
const scaleName = {
    "c": "celcius", "f": "farenhite",
};
class TemperatureInput extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         temperature: "",
    //     }
    // }
    // handleChange(e) {
    //     const { name, value } = e.target;
    //     this.setState({
    //         [name]: value,
    //     });
    // }
    render() {
        return (
            <fieldset>
                <label>Enter temperature in {scaleName[this.props.scale]}: </label>
                <input name={scaleName[this.props.scale]} value={this.props.value} onChange={this.props.onChange} />
            </fieldset>
        );
    }
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: "", temperature: "",
        }
    }
    handleChange(e) {
        const { name, value } = e.target;
        const scale = name === "celcius" ? "c" : "f";
        this.setState({
            scale: scale, temperature: value
        });
    }
    render() {
        const scale = this.state.scale;
        const temp = this.state.temperature;
        const celcius = scale === "c" ? temp : tryConvert(temp, toCelcius);
        const farenhite = scale === "f" ? temp : tryConvert(temp, toFarenhite);     
        return (
            <div>
                <TemperatureInput scale="c" onChange={this.handleChange.bind(this)} value={celcius} />
                <TemperatureInput scale="f" onChange={this.handleChange.bind(this)} value={farenhite} />
                <BoilingVerdict temperature={parseFloat(celcius)} />
            </div>
        );
    }
}
// --- Writing Conversion Functions
function toCelcius(fahrenhite) {
    return (fahrenhite - 32) * 5 / 9;
}
function toFarenhite(celcius) {
    return (celcius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    if (Number.isNaN(parseFloat(temperature))) {
        return '';
    }
    const output = convert(temperature);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
// --- Lifting State Up
// In React, sharing state is accomplished by moving it up to the closet common ancestor of the components that need it. 
// This is called "lifting state up". 
// We will remove the local state from the TemperatureInput and move it into the Calculator instead. 
// --- Lessons Learned 
// There should be a single "source of truth" for any data that changes in a React application. 
// Usually, the state is first added to the component that needs it for rendering. 
// Then, if other components also need it, you can lift it up to their closet common ancestor. 
// Instead of trying to sync the state between different components, you should rely on the top-down data flow. 



class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Lifting State Up</h1>
                <Calculator />
            </div>
        );
    }
}

export default App;