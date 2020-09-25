import React from 'react';

// ----- Conditional Rendering
// In React, you can create distinct components that encapsulate behavior you need. 
// Then, you can render only some of them, depending on the state of your application
function UserGreeting(props) {
    return <div>Welcome back!</div>;
}
function GuestGreeting(props) {
    return <div>Please Sign Up.</div>;
}
function Greeting(props) {
    const elem = props.isLogIn ? <UserGreeting /> : <GuestGreeting />;
    return (
        elem
    );
}
// --- Element Variables
// You can use variables to store elements.
// This can help you conditionally render a part of the component while the rest of the output doesn't change.
class LoginControl extends React.Component {
    render() {
        let elemBtn;
        if (this.props.isLogIn) {
            elemBtn = <LogOutButton onClick={this.props.onClick} />;
        } else {
            elemBtn = <LogInButton onClick={this.props.onClick} />;
        }
        return (
            <div>
            <h2>Logging Control</h2>
                {elemBtn}
            </div>
        );
    }
}
function LogInButton(props) {
    return (
        <button onClick={props.onClick}>Log in</button>
    );
}
function LogOutButton(props) {
    return (
        <button onClick={props.onClick}>Log out</button>
    )
}
// --- Inline If with Logical && Operator
function Mailbox(props) {
    const unreadMessage = props.unreadMessage;
    return (
        <div>
            <h3>Hello!</h3>
            { unreadMessage.length > 0 && 
                <h4>
                    You have {unreadMessage.length} unread message.
                </h4>
            }
        </div>
        // It works because in JavaScript, 
        // true && expression always evaluates to expression, and 
        // false && expression always evaluates to false. 
    );
}
const message = ["react", "re-act", "react-js"];
// --- Inline If-Else with Conditional Operator
// Another method for conditionally rendering elements inline is to use the 
// JavaScript conditional operator condition ? true : false.

// --- Preventing Component from Rendering
// In rare cases you might want a component to hide itself 
// even though it was rendered by another component. 
// To do this return null instead of its render output. 
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div>
            Warning
        </div>
    );
}
class ToggleWarning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: false,
        }
    }
    toggleWarning() {
        this.setState((state, props) => {
            return { showWarning: !state.showWarning };
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggleWarning.bind(this)}>{this.state.showWarning ? "Hide" : "Show"}</button>
                <WarningBanner warn={this.state.showWarning} />
            </div>
        );
    }
}
// Returning null form a component's render method does not affect the firing of the
// component's lifecycle methods. For instance componentDidUpdate will still be called. 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: false,
        }
    }
    handleLoginLogOut() {
        this.setState((state, props) => {
            return { isLogIn: !state.isLogIn };
        });
    }
    render() {
        return (
            <div>
                <h1>Conditional Rendering</h1>
                <Greeting isLogIn={this.state.isLogIn} />
                <LoginControl onClick={this.handleLoginLogOut.bind(this)} isLogIn={this.state.isLogIn} />
                <Mailbox unreadMessage={message} />
                <ToggleWarning />
            </div>
        );
    }
}

export default App;