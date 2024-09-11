import React, { useReducer } from 'react'

/* UseReducer
    1. useReducer is a hook for state management
    2. This hook is used to perform multiple operation as well as the use of multiple 
        usestate that can be avoided
    3. Reducers are simple, predictable (pure) functions that take a previous state object 
        and an action object and return a new state object.
*/

function UseReducer() {
    let initialState = {count:0};

    function reducer(state, action){ 
        switch(action.type){
            case "increment":
                return {count:state.count + 1};
            case "decrement":
                return {count:state.count - 1};
            case "multiplyBy2":
                return {count: state.count * 2};
            default:
                return "Invalid action Performed";
        }
    }
    const [state, dispatch] = useReducer(reducer,initialState);
    
  return (
    <div>
        <h1>useReducer Hook in React</h1>
        <h2>count is : {state.count}</h2>
        <br></br>
        <button onClick={()=>dispatch({type:"increment"})}> Increment </button>
        <br></br>
        <br></br>
        <button onClick={()=> dispatch({type:"decrement"})}> Decrement</button>
        <br></br>
        <br></br>
        <button onClick={()=> dispatch({type:"multiplyBy2"})}> Multiply by 2</button>
        <br></br>
        <hr></hr>
    </div>
  )
}

export default UseReducer