import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello, world!</h1>
            </div>
        );
    }
}
class Greeting extends React.Component {
    render() {
        return(
            <div>
                <h2>Hello, My name is {this.props.name}.</h2>
            </div>
        );
    }
}

export { HelloWorld as default, Greeting as greeting };