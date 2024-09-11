import React, { createContext, useState } from 'react';
import UseMemo from './Hooks/UseMemo';
import UseReducer from './Hooks/UseReducer';
import UseState from './Hooks/UseState';
import UseContext from './Hooks/UseContext';


export const globalInfo = createContext();
function App() {
  const [color, setColor] = useState("orange");
  return (
    <div style={{alignItems:'center'}}>
      <UseMemo />
      <UseReducer />
      <UseState />
      <globalInfo.Provider value={{color:color}}>
      {/* // Key color is import because whenever you access the value in child then you have to compulsory use the color key  */}
        <UseContext />
      </globalInfo.Provider>
    </div>
  )
}
export default App;
