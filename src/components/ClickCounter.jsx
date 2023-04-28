// ---------------  Tutorial-17 Starts (Context API pattern-3)   ----------------
// eslint-disable-next-line no-unused-vars
import React from "react";


// eslint-disable-next-line react/prop-types
export default function ClickCounter ({count, incrementCount}) {
        // eslint-disable-next-line react/prop-types
        return(
            <div>
                <button type="button" onClick={incrementCount}>
                    Clicked{count} times
                </button>
            </div>
        );
        }

// ---------------  Tutorial-17 Ends (Context API pattern-3)   ----------------









// ---------------  Tutorial-15 and 16 Starts (Context API pattern-2)   ----------------
// eslint-disable-next-line no-unused-vars
// import React from "react";


// // eslint-disable-next-line react/prop-types
// export default function ClickCounter ({count, incrementCount}) {
//         // eslint-disable-next-line react/prop-types
//         return(
//             <div>
//                 <button type="button" onClick={incrementCount}>
//                     Clicked{count} times
//                 </button>
//             </div>
//         );
//         }





// ---------------  Tutorial-15 and 16 Ends (Context API pattern)   ----------------






// --------------------------------------------------------------------------------------------------------
// Tutorial-14 Starts(Render props pattern)
// eslint-disable-next-line no-unused-vars
// import React from "react";

// // eslint-disable-next-line react/prop-types
// export default function ClickCounter ({count, incrementCount}) {
//         // eslint-disable-next-line react/prop-types
//         return(
//             <div>
//                 <button type="button" onClick={incrementCount}>
//                     Clicked{count} times
//                 </button>
//             </div>
//         );
//         }
    
// ---------------  Tutorial-14 Ends (Render props pattern)   ----------------

 



// -----------------------------------------------------------------------------------------------------------
// Tutorial-13(HOC) Starts
// The provided code is a React functional component called ClickCounter that exports the component returned by the higher-order component (HOC) withCounter. 


// import withCounter from "./HOC/withCounter";

// // This line declares the ClickCounter functional component that takes  'props' object (from withCounter) as a parameter.
// // eslint-disable-next-line react-refresh/only-export-components
// const ClickCounter=(props)=>{

// // This line destructures the count and incrementCount props from the props object.
//     // eslint-disable-next-line react/prop-types
//     const{count,incrementCount}=props;
//     // This block of code returns a div element containing a button. The button displays the count prop value and calls the incrementCount function when clicked.
//     return(
//         <div>
//             <button type='button'onClick={incrementCount}>
//                 Clicked{count} times
//             </button>
//         </div>
//     );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export default withCounter(ClickCounter);
// Tutorial-13(HOC) Ends
// -----------------------------------------------------------------------------------------------------------