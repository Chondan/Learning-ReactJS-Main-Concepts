import React from 'react';

// ---- Components and Props
// Components let you split the UI into independent, reusable pieces, 
// and think about each piece in isolation.
// Conceptually, components are like JavaScript functions. 
// They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.
// --- Function and Class Components
function Welcome(props) {
    return <h2>Hello, My name is {props.name}.</h2>
}
class AnotherWelcome extends React.Component {
    render() {
        return(
            <h2>Hello again, I am {this.props.name}.</h2>
        );
    }
}
// --- Extracting Components
function Comment(props) {
    return (
        <div className="comment">
            <UserInfo author={props.author} />
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
// -- Extract
function UserInfo(props) {
    return (
        <div className="user-info">
            <Avatar author={props.author} />
            <div className="user-info-name">
                {props.author.name}
            </div>
        </div>
    );
}
function Avatar(props) {
    return (
        <img 
        src={props.author.avatarUrl}
        alt={props.author.name} />
    );
}
const authorObj = {
    name: "Chondan",
    avatarUrl: "https://www.chondan.com"
};

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Components and Props</h1>
                <Welcome name="Chondan Susuwan" />
                <AnotherWelcome name="Chondan Susuwan" />
                <h2>Extracting Components</h2>
                <Comment date={new Date()} author={authorObj} text="This is test comment." />
            </div>
        );
    }
}

export default App;

function formatDate(date) {
    return date.toLocaleDateString();
}