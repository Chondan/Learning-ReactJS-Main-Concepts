import React from 'react';

// ----- Lists and Keys
// In React, transforming arrays into lists of elements is nearly identical
const numbers = [1, 2, 3, 4, 5];
// --- Rendering Multiple Components
// You can build collections of elements and include them in JSX using curly braces {}. 
// Below, we loop through the numbers array using the JavaScript map() function. 
// We return a <li> element for each item. 
// Finally, we assign the resulting array of elements to listItems. 
const listNumbers = numbers.map((number) => {
    return <li key={number}>{number}</li>;
});
function ConvertToList(props) {
    const arr = props.array;
    return arr.map((arr, index) => <li key={index}>{arr}</li>);
}
// When you run this code, you'll be given a warning that a key should be provided for list items. 
// A "key" is a special string attribute you need to include when creating lists of elements. 
// We'll discuss why it's important in the next section
// --- Keys 
// Keys help React identify which items have changed, are dead, or are removed.
// Keys should be given to the elements inside the array to give the elements a stable indentity
// The best way to pick a key is to use a string that uniquely indentifies a list item among its siblings. 
// Most often you would use IDs from your data as keys. 
// * When you don't have stable IDs for rendered items, 
// you may use the item index as a key as a last resort. 
// * We don't recommend using indexes for keys if the order of items may change. 
// This can negatively impact performance and may cause issue with component state. 
// --- Extracting Components with Keys
// Keys only make sense in the context of the surrounding array. 
function ListItem(props) {
    return (<li>{props.value}</li>);
}
function NumberList(props) {
    const listItems = props.numbers.map(num => {
        return <ListItem key={num.toString()} value={num} />;
    });
    return (
        <ul>{listItems}</ul>
    );
}
// * A good rule of thumb is that elements inside the map() call need keys. 
// --- Keys Must Only Be Unique Among Siblings
// Keys used within arrays should be unique among their siblings. 
// However they don't need to be globally unique.
// We can use the same keys when we produce two different arrays. 
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    );
    const contents = (
        props.posts.map(post => {
            return (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            );
        })
    )
    return (
        <div>
            {sidebar}
            <hr />
            {contents}
        </div>
    )
}
const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    { id: 2, title: "Installation", content: "You can install react from npm." },
];
// Keys serve as a hint to React but they don't get passed to your components.
// If you need the same value in your component, pass it explicity as a prop with a different name
// --- Embedding map() in JSX
// JSX allows embedding any expression in curly braces so we could inline the map() result. 

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Lists and Keys</h1>
                <h2>The list of numbers</h2>
                <h3>{numbers.map(num => `${num} `)}</h3>
                <h2>listItems</h2>
                <ul>{listNumbers}</ul>
                <h2>Cars</h2>
                <ConvertToList array={["Aston Martin", "BMW", "Mercedes Benz"]} />
                <h2>NumberList</h2>
                <NumberList numbers={numbers} />
                <h2>Blogs</h2>
                <Blog posts={posts} />
            </div>
        );
    }
}

export default App;
