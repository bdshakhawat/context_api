// --------------- Tutorial-17(Context API-3) Starts ---------------------------------


class Context{
    constructor(value=null){
        this.value=value;
    }
    // provider component to wrap the secction component in App component
    Provider=({children,value})=>{
        this.value=value;
        return children;
    }
    Consumer=({children})=>children(this.value);
}

function createContext(value=null){
    const context=new Context(value);
    return{
        Provider:context.Provider,
        Consumer:context.Consumer,
    };
}
export default createContext;
// --------------- Tutorial-17(Context API-3) Ends ---------------------------------








// --------------- Tutorial-16(Context API-2) Starts ---------------------------------

// Before using the Context API of React let's create a Context API by oureselves 
// class Context{
//     constructor(value=null){
//         this.value=value;
//     }
//     // provider component to wrap the secction component in App component
//     Provider=({children,value})=>{
//         this.value=value;
//         return children;
//     }
//     Consumer=({children})=>children(this.value);
// }

// function createContext(value=null){
//     const context=new Context(value);
//     return{
//         Provider:context.Provider,
//         Consumer:context.Consumer,
//     };
// }
// export default createContext;
// --------------- Tutorial-16(Context API-2) Ends ---------------------------------
