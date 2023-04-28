// A Higher Order Component(HOC) is a type of function that takes any component as argument then create and return a Newcomponent to use.

// The provided code is a Higher Order Component (HOC) in React that takes a  component named "OriginalComponent" then create a new component named "NewComponent" by adding  a 'count' state and an 'incrementCount' method to NewComponent. Here is a breakdown of each line of code:

// This line imports the React library that is necessary for creating React components.
import React from "react";
// This line creates a function called withCounter that takes  a component named "OriginalComponent" as an argument.
const withCounter=(OriginalComponent)=>{
    
    // This block of code defines a new component called NewComponent that extends the React.Component class to create the NewComponent. For this  a state object with a 'count' property is taken and initialized to zero, and a method called incrementCount that updates the count by adding 1 to the previous state. The render method returns the original component that was passed as an argument (OriginalComponent) along with the count state and incrementCount method as props which is known as NewComponent.

    class NewComponent extends React.Component{
        state={
            count:0,
        };
        incrementCount=()=>{
            this.setState((prevState)=>({count:prevState.count+1}));
        };
        render(){
            // Bring the value of count state by dstructuring
            const {count}=this.state;
            // Returning the "OriginalComponent" by inserting the 'count' state and 'incrementCount' method inside "OriginalComponent".
            return <OriginalComponent count={count} incrementCount={this.incrementCount}/>;
        }
    }
    return NewComponent;
};

export default withCounter;


// Higher Order Component Summary

// we have taken a component named withCounter and send the common state and funtionality to
// this withCounter. Then this withCounter takes any component as its parameter like ClickCounter
// HoverCounter etc and create a NewComponent by inserting the common state and functionality
// (props) into the parameter component taken by the withCounter.

// withCounter(Component){
//     state or data (common props)
        // ........
        // return <Component {...props}/>
// }
// withCounter(HoverCounter)
