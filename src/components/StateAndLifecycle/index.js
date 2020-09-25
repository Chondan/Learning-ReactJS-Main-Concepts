import React from 'react';

// ----- State and Lifecycle
// In this section, we will learn how to make the Clock component truly reusable and 
// encapsulated. It will set up its own timer and update itself every second. 
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date
        }
    }
    formatDateTime(date) {
        return date.toLocaleTimeString();
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <h2>
                The time is {this.formatDateTime(this.state.date)}
            </h2>
        );
    }
}
// ----- Using State Correctly
// --- Do Not Modify State Directly
// --- State Updates May Be Asynchronous
// React may batch multiple setState() calls into a single update for performance. 
// Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. 
// To fix it, use a second from of setState() that accepts a function rather than an object.
// That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument. 
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.start,
            increment: this.props.increment,
        }
    }
    counting() {
        this.setState((state, props) => {
            return {
                counter: state.counter + props.increment,
            }
        });
    }
    getOnlyEven() {
        if (this.state.counter %2 === 0) {
            return <div>Counter: {this.state.counter}</div>
        } 
        return <div>Odd</div>;
    }
    componentDidMount() {
        this.timer = setInterval(() => this.counting(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        if (this.state.counter > 50) {
            return <div>Timeout</div>;
        }
        return (
            this.getOnlyEven()
        );
    }
}
// --- State Updates are Merged
// When you call setState(), React merges the object you provide into the current state. 
// --- The Data Flows Down
// Neither parent nor child components can know if a certain component is stateful or stateless, 
// and they shouldn't care whether it is defined as function or a class


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>State and Lifecycle</h1>
                <Clock date={new Date()} />
                <Counter start={0} increment={1} />
            </div>
        );
    }
}

export default App;