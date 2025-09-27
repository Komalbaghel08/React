import React from 'react'

const Map = () => {
    let Fruits = ["Apple","banana","grapes","beetroot"]
  return (
    <>
    <h1>Mapping items</h1>
    <ul>
        {Fruits.map((e,index)=>(
        <li key={index}>{e}</li>
        ))}
    </ul>
    </>
  )
}
export default Map