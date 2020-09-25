import React, { Component } from 'react';

// ----- Rendering Elements
// Elements are the smallest building blocks of React apps.
const element = <h2>Hello, world</h2>;
// ----- Updating the Rendered Element
// React elements are immutable is like a single frame in a movie: 
// it represents the UI at a certain point in time. 
// ----- React Only Updates What's Necessary
// React DOM compares the element and its children to the previous one, 
// and only applies the DOM updates necessary to bring the DOM to the desired state. 

class App extends Component {
    render() {
        return(
            <div>
                {element}
                <div>The time is {this.props.time}</div>
            </div>
        );
    }
}

export default App;