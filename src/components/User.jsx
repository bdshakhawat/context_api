// We know that every component has a render logic inside its body. But here this User component has no 
// render logic inside the body rather its render logic is controling from outside and render logic become 
// outsourced.
// Render prop is the prop that control the render logic of a  component from outside that means the render logic is not defined inside the body of the component. So it is a
// dumb component and it receive a function from outside and render according to the return logic of the function.
// So the user has the liberty to write a function logic from their own whatever they want to render.
// Finally we can say that Render prop is type of prop that controls the render logic of a component from outside
// which can be written by the user as their own requirement.By using this technique we can solve the problem of prop drilling.





// Same output 

// First case declaring props inside the user component locally
// export default function User(){
//     return 'Shakhawat';
// }

// Second case taking props from App component declared globally
// export default function User({name}){
//     return name;
// }

// Third case receiving function without parameter from App component
// export default function User({name}){
//     return name();
// }

// Fourth case taking function with parameter and function body of ternary operator from App 
// export default function User({name}){
//     return name(true);
// }


// Output "Shakhawat"
export default function User({render}){
    return render(false);
}
// Output: 'Guest'
