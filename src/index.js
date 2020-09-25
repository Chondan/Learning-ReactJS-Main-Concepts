import React from 'react';
import ReactDOM from 'react-dom';
// import IntroducingJSX from './components/IntroducintJSX';
// import RenderingElements from './components/RenderingElements';
// import ComponentsAndProps from './components/ComponentsAndProps';
// import StateAndLifecycle from './components/StateAndLifecycle';
// import HandlingEvents from './components/HandlingEvents';
// import ConditionalRendering from './components/ConditionalRendering';
// import ListsAndKeys from './components/ListsAndKeys';
// import Forms from './components/Forms';
// import LiftingStateUp from './components/LiftingStateUp';
// import CompositionVsInheritance from './components/CompositionVsInheritance';
import ThinkingInReact from './components/ThinkingInReact';
// import './styles.css';

class App extends React.Component {
    render() {
        return(
            <div>
                {/* <IntroducingJSX />
                <RenderingElements time={new Date().toLocaleTimeString()} />
                <ComponentsAndProps />
                <StateAndLifecycle />
                <HandlingEvents />
                <ConditionalRendering />
                <ListsAndKeys />
                <Forms />
                <LiftingStateUp />
                <hr />
                <CompositionVsInheritance />
                <hr /> */}
                <ThinkingInReact />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

// ----- Update time 
// setInterval(() => {
//     ReactDOM.render(
//         <App />,
//         document.getElementById("root")
//     );
// }, 1000);