import React, { useState } from 'react'

/*
     useState Hook
    1. useState to Create State Variables
    2. The useState hook allows us to create state variables in a React function component.

    3. State allows us to access and update certain values in our components over time

    4. When we create a state variable, we must provide it a default value (which can be any data type).

    5. We get that state variable as the first value in an array, which we can destructure and declare with const.
*/
function UseState() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>useState Hook in React</h1>
        <h2>count is : {count}</h2>

        <button onClick={()=>(setCount(count + 1))}> + </button>

        <hr></hr>
    </div>
  )
}

export default UseState;