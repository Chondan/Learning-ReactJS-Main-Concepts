import React from 'react';

// ----- Composition vs Inheritance
// React has a powerful composition model, 
// and we recommend using composition instead of inheritance to reuse code between components. 
// --- Containmet 
// Some components don't know their children ahead of time. 
// This is especially common for components like Sidebar or Dialog that represent generic "boxes". 
// We recommend that such components use the special children prop to pass children elements directly into their output
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
// This lets other components pass arbitrary children to them by nesting the JSX. 
function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h3 className="Dialog-title">Welcome</h3>
            <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
        </FancyBorder>
    );
}
// Anything inside the <FancyBorder> JSX tag get passed into the FancyBorder component as a children prop. 
// Since FancyBorder renders {props.children} inside a <div>, the passed elements appear in the final output. 
// While this is less common, sometimes you might need multiple "holes" in a component. 
// In such cases you may come up wity your own convention instead of using children. 
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <h2>SplitPane</h2>
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
}
function Contacts() {
    return (
        <h3>SplitPane-left: Contacts</h3>
    );
}
function Chat() {
    return (
        <h3>SplitPane-right: Chat</h3>
    );
}
// React elements like <Contacts /> and <Chat /> are just objects, 
// so you can pass them as props like any other data. 
// This approach may remind you of "slots" in other libraries but there are no 
// limitations on whay you can pass as props in React
// --- Specialization
// Sometimes we think about components as being "special cases" of other components. 
// For example, we might say that a WelcomeDialog is a special case of Dialog. 
// In React, this is also achieved by composition, where a more "specific" component reders a more "generic" one 
// and configures it with props
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h3>{props.title}</h3>
            <p>{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}
function Welcome(props) {
    return (
        <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
    );
}
// Composition works equally well for components defined as classes
class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {
            login: "",
        }
    }
    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </Dialog>
        );
    }
    handleChange(e) {
        const { value } = e.target;
        this.setState({ login: value });
    }
    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}`);
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Composition ve Inheritance</h1>
                <h2>Containmet</h2>
                <WelcomeDialog />
                <SplitPane left={<Contacts />} right={<Chat />} />
                <h2>Specialization</h2>
                <Welcome />
                <SignUpDialog />
            </div>
        );
    }
}

export default App;