// This counter component will hold the common part of clickCounter and HoverCounter component and call the 
// render function with its present state 'count' and 'incrementCount'.
import React from "react";

// This line declares a new class component named Counter that extends or inherits the React.Component class.
class Counter extends React.Component{
    
    //  initializing the component's state with a count property and set initial state to 0.
    state={
        count:0,
    };
    
    //  declaring an incrementCount method that updates the count state by incrementing the previous count(0) value by 1(0+1), (1+1), (2+1)..... Here this means the initial state
    incrementCount=()=>{
            this.setState((prevState)=>({count:prevState.count+1}));
    };
//  component's render method, which returns the JSX to be rendered to the DOM.
    render(){

        // This line uses destructuring to extract the children prop from the component's props.
        // eslint-disable-next-line react/prop-types
        const{children}=this.props;
        // This line extracts the count value from the component's state by destructring method.
        const {count}=this.state;
        //  returns the children prop as a function that takes count and incrementCount as arguments to be used in rendering the children components.
        return children (count, this.incrementCount);
        
    }
}
export default Counter;

// Overall, the Counter component is a reusable component that wraps around other components and passes down its state and methods as props to be used by the children components.
// // Summary of Render props pattern
// Render props pattern
// class Counter{
//     common code or state or data
//     render(){
//         return this.props.children(anything);
//     }
// }

// now receive this function call from the counter component to the App component.
{/* <Counter>
    (anything)=><HoverCounter anything/>
</Counter> */}

// Both the pattern HOC and Render props are used to avoid props drilling problem
// Now we will learn another pattern to slove the same props drilling problem with 
// Context API:

// For this firstly we need to create a context with the help of a react.createContext();
// then we will export this context to reuse it to any other component

// Lets create a context for counter component
// const CounterContext= React.createContext();
// export default CounterContext
// now this 'CounterContext' will provide two things:
//   i) Context.Provider------> In this case App component is Provider. So we will wrap it like this: import CounterContext from './CounterContext'; 
//  give a value that we want to provide to the consumer component
// return(
//     <CounterContext.Provider value={{count:0, incrementCount:incrementCount}}>
//         <App/>
//     </CounterContext.Provider>
// );

// ii) Context.Consumer--------> Now HoverCounter is the consumer component.
// so, wrap it with CounterContext.Consumer. But it is not possible for the HoverCounter to receive the value props from the provider component directly by stying inside the CounterContext.Consumer wraper. Thus we have to follow the render props patern to receive the value props with the help of an annonymous function like this: 
// import CounterContext from './CounterContext';
// return(
//     <CounterContext.Consumer>
//         ({count, incrementCount})=><HoverCounter count={count} incrementCount={incrementCount}/>
//     </CounterContext.Consumer>
// )
