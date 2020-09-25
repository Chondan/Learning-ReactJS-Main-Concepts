import React from 'react';

// ----- Handling Events
// Handling events with React element is very similar to handling events
// on DOM elements. There are some syntax differences. 
// * React events are named using camelCase, rather than lowercase
// * With JSX you pass a function as the event handler, rather than a string
// * Another difference is that you cannot return false to prevent default behavior in React. 
// * You must call prevenDefault explicity. 
// ----- this
// You have to be careful about the meaning of this. in JSX callbacks. 
// In JavaScript, class methods are not bound by default.
// If you forgot to bind this.handleClick and pass it to onClick, 
// this will be undefined when the funtion is actually called. 
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState((state, props) => {
            return { isToggleOn: !state.isToggleOn }
        });
    }
    render() {
        let str;
        if (this.state.isToggleOn) {
            str = "OFF";
        } else {
            str = "ON";
        }
        return (
            <div>
                <button onClick={this.handleClick}>{str}</button>
            </div>
        );
    }
}
// If you aren't using class field syntax, you can use an arrow function in the callback
// --- Passing Arguments to Event Handlers
class LoggingButton extends React.Component {
    handleClick(e, name) {
        console.log(this);
        console.log(e.target);
        console.log(name);
    }
    greeting(name) {
        console.log(`Hello, My name is ${name}`);
    }
    render() {
        return (
            <div>
                <button style={btnStyle} onClick={(e) => this.handleClick(e, this.props.name)}>Click me</button>
                <button style={btnStyle} onClick={this.greeting.bind(this, this.props.name)}>Click me too</button>
            </div>
        );
    }
}
const btnStyle = { margin: "2px" };

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Handling Events</h1>
                <h2>Toggle</h2>
                <Toggle />
                <h2>Logging</h2>
                <LoggingButton name="Chondan" />
            </div>
        );
    }
}

export { App as default };