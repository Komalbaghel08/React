import React from 'react'
import User from "./User"
import College from './College'
const App1 = () => {
let userObject={
    name:"komal",
    age:21,
    email:"komal@gmail.com"
}
let userObject1={
    name:"kanak",
    age:26,
    email:"kanak@gmail.com"
}

let userObject2={
    name:"sankalp",
    age:20,
    email:"sankalp@gmail.com"
}
let collegeName=['NIT','DU','MIT','AU']
  return (
    <>
    <h1>Props in React</h1>
    <College names={collegeName[0]} />
    <College names={collegeName[1]} />
    <College names={collegeName[2]} />
    <User user={userObject}/>
    <User user={userObject1}/>
    <User user={userObject2}/>
    </>
  )
}

export default App1