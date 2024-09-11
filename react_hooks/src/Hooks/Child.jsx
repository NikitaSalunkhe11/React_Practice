import React, { useContext } from 'react'
import { globalInfo } from '../App'

function Child() {
    const {color}= useContext(globalInfo);
  return (
    <div>
        <h2>Child Component of UseContext hook</h2>
        <h2> child color value received : {color}</h2>
    </div>
  )
}

export default Child