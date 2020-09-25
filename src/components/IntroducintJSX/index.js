import React from 'react';
import Hello, { greeting as Greet } from '../HelloWorld'

const intro = <h2>Introducing JSX</h2>;
const age = 22;
// Embedding Expressions in JSX
const myAgeElem = <h3>I am {age} years old.</h3>;
const chondan = {
    firstName: "Chondan",
    lastName: "Susuwan",
};
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
// JSX is an Expression Too
function verifyUserBeforeFormatName(user) {
    if (user) {
        return <h3>Hello again, My name is {formatName(user)}</h3>;
    }
    return <h3>Hello ,stranger</h3>;
}
// Specifying Attributes with JSX
const coala = { imgURL: "https://pbs.twimg.com/profile_images/458197762463387648/cjOG-5wq_400x400.jpeg" };
const imgElem = <img src={coala.imgURL} alt="coala"></img>
// Specifying Children with JSX
// If a tag is empty, you may close it immediately wit />, like XML
// const emptyImgElem = <img src={coala.imgURL} />;

// JSX Prevents Injection Attacks
// By default, React DOM escapes any values embedded in JSX before rendering them.
// Thus it ensures that you can never inject anything that's not explicity written in your application.
// Everythin is converted to a string before being rendered.
// This helps prevent XSS (cross-site-scripting) attacks.

class App extends React.Component {
    render() {
        return(
            <div>
                <Hello />
                <Greet name="Chondan Susuwan"/>
                {myAgeElem}
                <h3 tabIndex="0">Hello again, I am {formatName(chondan)}.</h3>
                {intro}
                {verifyUserBeforeFormatName(chondan)}
                {verifyUserBeforeFormatName()}
                <figure>{imgElem}</figure>
            </div>
        );
    }
}

export default App;