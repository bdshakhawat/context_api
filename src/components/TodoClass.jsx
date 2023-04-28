// -------- Tutorial-19 (React Hooks-useState) ----------------

import React from "react";


class Todo extends React.Component{
    // two states, todo and warning, both initially set to null
    state={
        todo: ' ',
        warning: null,
    };

    // This line defines an arrow function called `handleInput` which takes an event (`e`) as its argument. It's used as the `onChange` event handler for the `<textarea>` element in the render function.
    handleInput=(e)=>{
    //  // This line extracts the value of the input from the `target` property of the event object passed in as an argument to the `handleInput` function. In this case, it gets the value of the `<textarea>` element.
        const inputValue=e.target.value;
    // This line checks whether the input value contains the string ".js". If it does, it sets the `warning` variable to the string "You need JavaScript skill to complete the task. Do you have it?". If not, it sets `warning` to `null`.
        const warning=inputValue.includes('.js')
        ? 'You need JavaScript skill to complete the task. Do you have it?'
        :null;
    // This line calls the `setState` method to update the component's state. It sets the `todo` property to the `inputValue` variable, and the `warning` property to the `warning` variable defined earlier. This will trigger a re-render of the component, which will display the updated state.
        this.setState({
            todo:inputValue,
            warning,
    
        });
    
    };
// The render() method is a required method in React components that returns what should be displayed on the screen.
    render(){
// Inside the render() method, there is a destructuring assignment of todo and warning variables from this.state. This makes it easier to reference these variables throughout the component.
        const {todo,warning}=this.state;
        return(
// A <div> element is created as the main container for the component's elements.
            <div>
{/* A <p> element is created to display the current value of todo. */}
                <p>{todo}</p>
{/* A <textarea> element is created to capture user input.
The name attribute is set to 'todo' to identify the input field later if needed.
The value attribute is set to the current value of todo.
The onChange attribute is set to the handleInput method which will be called whenever the user types something in the input field. */}
                <p>
                    <textarea name='todo' value={todo} onChange={this.handleInput} />
                </p>
{/* A <hr> element is added as a horizontal line separator. */}
                <hr/>
{/* A <h2> element is added to display the warning message if the input contains '.js' or 'Good Choice!' if not.
The warning variable is used here to determine whether or not to display the warning message. If the warning variable is null, then 'Good Choice!' will be displayed instead. */}
                <h2>{warning || 'Good Choice!'}</h2>

            </div>
        )
    }


}
export default Todo;