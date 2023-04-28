// Tutorial-17 Starts(Context API-3)

import Content from './Content'
// Section will receive the state from APP
// eslint-disable-next-line react/prop-types
export default function Section(){
    return(
        <div>
            <h1> This is a section</h1>
            {/* now this prop state will inserted to content */}
            <Content />
        </div>
    );
}


// Tutorial-17 Ends (Context API-3)





// Tutorial-15 and 16 Starts(Context API-1,2)

// import Content from './Content'
// // Section will receive the state from APP
// // eslint-disable-next-line react/prop-types
// export default function Section(){
//     return(
//         <div>
//             <h1> This is a section</h1>
//             {/* now this prop state will inserted to content */}
//             <Content />
//         </div>
//     );
// }


// Tutorial-15 and 16 Ends (Context API-1,2)