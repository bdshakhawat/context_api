// Tutorial-17 Starts(Context API-3)
// import React from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import { useContext } from 'react';

// Method #3 with functional component by using hook
export default function Content(){
    const context=useContext(ThemeContext);
    // Bring the props by destructring method
    const {theme,switchTheme}=context;
    return(
        <div>
            <h1>This is a content</h1>
            {/* Now content will insert it into HoverCounter */}
            <Counter>
                {(counter, incrementCount)=>(
                    
                        <HoverCounter 
                            count={counter} 
                            incrementCount={incrementCount} 
                            theme={theme} 
                            switchTheme={switchTheme}
                       />
                   
                )
                }
            </Counter>
        </div>
    )
}








// Method #2 with class component and to get the theme and switchTheme props outside render function
// in any lifecycle method like Didmount

// eslint-disable-next-line react/prop-types
// export default class Content extends React.Component{
//     componentDidMount(){
//         console.log(this.context);
//     }
// //We can also use the static property like this:  static contextType=themeContext;
//     render(){
    // Bring the props by destructring method
//         const{theme,switchTheme}=this.context;
//         return(
//             <div>
//                 <h1>This is a content</h1>
//                 {/* Now content will insert it into HoverCounter */}
//                 <Counter>
//                     {(counter, incrementCount)=>(
                        
                            
//                                 <HoverCounter 
//                                     count={counter} 
//                                     incrementCount={incrementCount} 
//                                     theme={theme} 
//                                     switchTheme={switchTheme}
//                                 />
                            
//                     )}
//                 </Counter>
//             </div>
//         )
    
//     }
// }
// now the value props will be available as this.context. It is a static property of class 
// component
// Content.contextType=ThemeContext;








// Method #1 with functional component
// export default function Content(){
//     return(
//         <div>
//             <h1>This is a content</h1>
//             {/* Now content will insert it into HoverCounter */}
//             <Counter>
//                 {(counter, incrementCount)=>(
//                     <ThemeContext.Consumer>
//                         {({theme,switchTheme})=> <HoverCounter count={counter} 
//                         incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/>}
//                     </ThemeContext.Consumer>
//                 )
//                 }
//             </Counter>
//         </div>
//     )
// }

// Tutorial-17 Ends (Context API-3)









// Tutorial-15 and 16 Starts(Context API-1,2)

// import ThemeContext from '../contexts/themeContext';
// import Counter from './Counter';
// import HoverCounter from './HoverCounter';


// // Now content will receive this state prop from section
// // eslint-disable-next-line react/prop-types
// export default function Content(){
//     return(
//         <div>
//             <h1>This is a content</h1>
//             {/* Now content will insert it into HoverCounter */}
//             <Counter>
//                 {(counter, incrementCount)=>(
//                     <ThemeContext.Consumer>
//                         {({theme})=> <HoverCounter count={counter} 
//                         incrementCount={incrementCount} theme={theme}/>}
//                     </ThemeContext.Consumer>
//                 )
//                 }
//             </Counter>
//         </div>
//     )
// }

// Tutorial-15 and 16 Ends (Context API-1,2)