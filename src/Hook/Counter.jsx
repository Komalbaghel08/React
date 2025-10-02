import React, { useState } from 'react'

const Counter = () => {
    const[count,setcount] = useState(0)
  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={() => setcount(count+1)}>Update Counter</button>
    </>
  )
}

export default Counter