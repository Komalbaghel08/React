import React, { useState } from 'react'
import Counter from './Counter'

const App = () => {
    const[count,setCount]=useState(0)
  return (
    <>
    <Counter count={count}/>
    <button onClick={()=>setCount(count+1)}>Counter</button>
    </>
  )
}

export default App