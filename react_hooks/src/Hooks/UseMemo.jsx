import React, { useMemo, useState } from 'react'

/*UseMomo =====>>>>

    **********If I am Creating 2 state in that I am Updating the one state but another state also re-render so that 
    the performance of the component will decrease to avoid this we use useMemo Hook*************

    1. useMemo is used to Memories the value 
    2. It catch the result of a calculation between re-render
    3. It Skips expensive recalculation
    4. It skipps the re-rendering of component so thats why it will used for Perfomance optimization
    
    **** Troubleshooting
My calculation runs twice on every re-render
My useMemo call is supposed to return an object, but returns undefined
Every time my component renders, the calculation in useMemo re-runs
I need to call useMemo for each list item in a loop, but it’s not allowed
*/


function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const memoval = useMemo(function IncreseCount(){
    console.warn("function is running>>>")
    return count*2;
  },[count]);

  return (
    <div>
      <h1>useMemo Hook in React</h1>
      <h2> Count is : {count}</h2>
      <h2> Item count is : {item}</h2>
      <h3>MemoValue is : {memoval}</h3>
      <button onClick={()=> setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setItem(item * 10)}> Increase Item by 10</button>
      <hr></hr>
    </div>
  )
}

export default UseMemo;