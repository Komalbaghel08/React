import React from 'react'
import { useState } from 'react'
import Counter from "./Counter"

const State = () => {
    const [Fruit,setFruit] = useState("Beetroot")
    const handleFruit=()=>{
        setFruit("KIWI")
    }
  return (
    <>
    <h1>Fruits</h1>
    <h2>{Fruit}</h2>
    <button onClick={handleFruit}>chnge fruit</button>
    <Counter/>
    </>
  )
}

export default State  