// ----------  Tutorial-17 (Context API pattern-3) Starts -----------------
// eslint-disable-next-line no-unused-vars
import React from "react";
// Finally HoverCounter will receive this state prop and based on the theme it will change the 
// style of the h1 jsx tag.
// eslint-disable-next-line react/prop-types
export default function HoverCounter ({count, incrementCount, theme,switchTheme}){
    // Create the style object here
        const style= theme==='dark' ? {backgroundColor:'#000000', color:'#ffffff'}:null;
        return(
            <div>
                {/* But to apply inline style in jsx i need to use it dinamically as a 
                form of object. so i need to form a style object first then apply it like
                this style={{object}} */}
                <h1  onMouseOver={incrementCount} style={style}>
                    Hovered{count} times
                </h1>
                <button type="button" onClick={switchTheme}>Switch Theme</button>
            </div>
        )
        }






// ----------  Tutorial-17 (Context API pattern-3) Ends -----------------






// ----------  Tutorial-15 and 16 (Context API pattern-1,2) Starts -----------------
// eslint-disable-next-line no-unused-vars
// import React from "react";
// // Finally HoverCounter will receive this state prop and based on the theme it will change the 
// // style of the h1 jsx tag.
// // eslint-disable-next-line react/prop-types
// export default function HoverCounter ({count, incrementCount, theme}){
//     // Create the style object here
//         const style= theme==='dark' ? {backgroundColor:'#000000', color:'#ffffff'}:null;
//         return(
//             <div>
//                 {/* But to apply inline style in jsx i need to use it dinamically as a 
//                 form of object. so i need to form a style object first then apply it like
//                 this style={{object}} */}
//                 <h1  onMouseOver={incrementCount} style={style}>
//                     Hovered{count} times
//                 </h1>
//             </div>
//         )
//         }






// ----------  Tutorial-15 and 16 (Context API pattern-1,2) Ends -----------------






// ------------------------------------------------------
// Tutorial-14  (Render Props Pattern) Starts
// eslint-disable-next-line no-unused-vars
// import React from "react";

// // eslint-disable-next-line react/prop-types
// export default function HoverCounter ({count, incrementCount}){
//         return(
//             <div>
//                 <h1  onMouseOver={incrementCount}>
//                     Hovered{count} times
//                 </h1>
//             </div>
//         )
//         }

// Tutorial-14 Ends
// ------------------------------------------------------------






// // The provided code is a React functional component called HoverCounter that exports the component returned by the higher-order component (HOC) withCounter. 

// import withCounter from "./HOC/withCounter";
// // This line declares the HoverCounter functional component that takes  props as a parameter.
// // eslint-disable-next-line react-refresh/only-export-components
// const HoverCounter=(props)=>{
//     // This line destructures the count and incrementCount props from the props object.
//     // eslint-disable-next-line react/prop-types
//     const{count,incrementCount}=props;
//     // This block of code returns a div element containing an h1 element. The h1 element displays the count prop value and calls the incrementCount function when the user hovers over it.
//     return(
//         <div>
//             <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
//         </div>
//     );
// }
// // eslint-disable-next-line react-refresh/only-export-components
// export default withCounter(HoverCounter);
