// ---------------  Tutorial-17  (Context API Pattern-3) Starts ------------------
import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext'


export default class App extends React.Component{
    state={
        theme:'light',
        // Value from state then ThemeContextProvider will not render. This is the best 
        // practice to avoid unnecessary render of component.
        switchTheme:()=>{
            this.setState(({theme})=>{
                if (theme==='dark'){
                    return{
                        theme:'light',
                    };
                }
                return{
                    theme:'dark'
                };
            });

            
        }

    };
    // Value from outside the state as a object then with the App render ThemeContextProvider
    // will also render.
    // switchTheme=()=>{
    //     this.setState(({theme})=>{
    //         if (theme==='dark'){
    //             return{
    //                 theme:'light',
    //             };
    //         }
    //         return{
    //             theme:'dark'
    //         };
    //     });

    // Now i want to change the theme with the help of a switch theme button in the HoverCounter
    // For this let's write a switchTheme function and this function will update the theme 
        // state and convert it to light or dark. if present state is dark then make it light
        // but if the present state is light then make it dark.

    render(){
        // const {theme}=this.state;
        return(
            <div className='app'>
                <Counter>
                    {(counter, incrementCount)=>(
                        <ClickCounter count={counter} incrementCount={incrementCount}/>
                    )

                    }
                </Counter>
                {/* use value as state value */}
                <ThemeContext.Provider value={this.state}>
                    <Section/>

                </ThemeContext.Provider>
                {/* Use value as object */}
                {/* <ThemeContext.Provider value={{theme:theme,switchTheme:this.switchTheme}}>
                    <Section />
                </ThemeContext.Provider> */}
                
            </div>
        )
    }
}


// ---------------  Tutorial-17  (Context API Pattern-3) Ends ------------------
// Some important characteristics of Context API:
// i) If the value of ThemeContextProvider changes then its consumers components must re-render
// ii) If the parent component(App Component) render then all the child component will also
// render except the ThemeContextProviders consumer components. Because ThemeContextProvider
// only render when the value is changes. But if the value of the ThemeContextProvider is 
// given as object then with the app render it will also render because we know object is 
// reference type so when the App component will render then the value will get a new reference
// since the value will remain same and it will render. Rather if we use it as a state value 
// then it will not render.
















// ---------------  Tutorial-15 and 16 (Context API Pattern) Starts ------------------
// import React from 'react';
// import ClickCounter from './components/ClickCounter';
// import Counter from './components/Counter';
// import Section from './components/Section';
// import ThemeContext from './contexts/themeContext'

// // Now i want to send a state from App component to HoverCounter. For this change the 
// // App component into class component and declare a state.

// export default class App extends React.Component{
//     // initialize a state and want to send the state into HoverCounter component. If i want 
//     // to send it by i) props drilling pattern. ii) Context API pattern
//     state={
//         theme:'dark'
//     };
//     render(){
//         // i) For prop drilling pattern destructring the state value 'theme' from 'this.state'
//         const {theme}=this.state;
//         return(
//             <div className='app'>
//                 <Counter>
//                     {(counter, incrementCount)=>(
//                         <ClickCounter count={counter} incrementCount={incrementCount}/>
//                     )

//                     }
//                 </Counter>
//                 <ThemeContext.Provider value={{theme}}>
//                     <Section />
//                 </ThemeContext.Provider>
                
//             </div>
//         )
//     }
// }






// ---------------  Tutorial-15 and 16 (Context API Pattern) Ends ------------------





// ---------------  Tutorial-14 (Render props Pattern) Starts ------------------

// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import Counter from './components/Counter';


// function App() {
//     return (
//         <div className="app">
//           {/* First case declaring proos in the component localy*/}
//           {/* <User/> */}

//           {/* Second case declaring props in the App component globally*/}
//           {/* <User name='Shakhawat'/> */}

//           {/* Third case passing a function as a props */}
//           {/* <User name={()=>'shakhawat'}/> */}

//           {/* Fourth case passing function with parameter and function body of ternary operator */}
//             {/* <User render={(isLogedIn)=>(isLogedIn ?'Shakhawat':'Guest')}/> */}
            
//             {/*--------------------------------------------------------------------------------------  */}
//              {/* Method one for Render props  */}
//             {/* <Counter
//                 render={(count,incrementCount)=>(
//                     <ClickCounter count={count} incrementCount={incrementCount}/>
//                 )}
            
//             />
//             <Counter
//                 render={(count,incrementCount)=>(
//                     <HoverCounter count={count} incrementCount={incrementCount}/>
//                 )}
            
//             /> */}
//             {/* ----------------------------------------------------------------------------- */}

//              {/* Method two for Render props  */}
//              <Counter>
//                 {
//                     (count,incrementCount)=>(
//                         <ClickCounter count={count} incrementCount={incrementCount}/>
//                     )
//                 }
//              </Counter>
//              <Counter>
//                 {
//                     (count, incrementCount)=>(
//                         <HoverCounter count={count} incrementCount={incrementCount}/>
//                     )
//                 }
//              </Counter>
            
            
//         </div>
//     );
// }

// export default App;

// -------  Tutorial-14 (Render props Pattern) Ends ---------------------