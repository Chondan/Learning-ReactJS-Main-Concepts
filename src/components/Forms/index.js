import React from 'react';
import './styles.css'

// ----- Forms
// HTML form elements work a little bit differently from other DOM elements in React, 
// because form elements naturally keep some internal state. 
// For example, this form in plain HTML accepts a single name. 
// --- Controlled Components
// In HTML, form elements such as <input>, <textarea>, and <select> 
// typically maintain their own state and update it based on user input.
// In React, mutable state is typically kept in the state property of components, 
// and only updated with setState()
// * We can combine the two by making the React state be the "single source of truth". 
// Then the React component that renders a form also controls what happens in that form on subsequent
// user input. An input form element whose value is controlled by React in this way is called a "controlled component"
// --- The textare Tag
// In HTML, a <textarea> element defines its text by its children
// In React, a <textarea> uses a value attribute instead. 
// --- The select Tab
// In HTML, <select> creates a drop-down list. 
// In HTML, use selected attribute to intially select option value. 
// React, instead of using this selected attribute, uses a value attribute on the root select tag. 
// This is more convenient in a controlled component because you only need to update it in one place. 
class SelectForm extends React.Component {
    render() {
        return (
            <select name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
                {this.props.options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        );
    }
}
// Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly. 
// They all accept a value attribute that you can use to implement a controlled component. 
// * You can pass an array into the value attribute, allowing you to selecet multiple options in a select tag
// --- The file input Tag
// In HTML, an <input type="file"> lets the user choose one or more files from their device
// storage to be uploaded to a server or manipulated by JavaScript via the File API. 


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", 
            age: "",
            hobby: "",
            comment: "",
            car: this.cars[0],
        };
        this.initialState = { 
            name: "", 
            age: "", 
            hobby: "", 
            comment: "", 
            car: "",
        };
    }
    cars = ["Aston Martin", "BMW", "Mercedes Benz"];
    onSubmit = (e) => {
        e.preventDefault();
        console.log("name: ", this.state.name);
        console.log("age: ", this.state.age);
        console.log("hobby: ", this.state.hobby);
        console.log("comment: ", this.state.comment);
        console.log("car: ", this.state.car);
        console.log("uncontrolledInput: ", this._uncontrolledInput.value);
        this.setState(this.initialState);
        this._uncontrolledInput.value = "";
        document.querySelector("input[name='name']").focus();
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <label>Name: </label>
                <input name="name" onChange={this.handleChange.bind(this)} value={this.state.name} />
                <label>Age: </label>
                <input name="age" onChange={this.handleChange.bind(this)} value={this.state.age} />
                <label>Hobby: </label>
                <input name="hobby" onChange={this.handleChange.bind(this)} value={this.state.hobby} />
                <label>Comment: </label>
                <textarea name="comment" onChange={this.handleChange.bind(this)} value={this.state.comment} />
                <label>Car: </label>
                <SelectForm name="car" options={this.cars} value={this.state.car} onChange={this.handleChange.bind(this)}/>
                <label>Uncotrolled Input: </label>
                <input type="text" ref={(input) => this._uncontrolledInput = input} />
                <input type="submit"/>
            </form>
        );
    }
}
// --- Controlled Input Null Value
// Specifying the value prop on a controlled component prevents the user form changing the 
// input unless you desire so. If you've specified a value but the input is still editable, 
// you may have accidentally set value to undefined or null. 

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Forms</h1>
                <NameForm />
            </div>
        );
    }
}

export default App;