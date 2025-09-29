import React from 'react'

const Map = () => {
    // let Fruits = ["Apple","banana","grapes","beetroot"]
    let Student = [
        {id:1,name:"komal",age:21},
        {id:2,name:"kanak",age:22},
        {id:3,name:"mahak",age:29},
        {id:4,name:"palak",age:25},
    ]
  return (
    <>
    <h1>Mapping items</h1>
    <ul>
        {/* {Fruits.map((e,index)=>(
        <li key={index}>{e}</li>
        ))} */}
        {Student.map((e)=>(
            <li key={e.id}>Name = {e.name} , Age = {e.age}</li>
        ))}


    </ul>
    </>
  )
}
export default Map