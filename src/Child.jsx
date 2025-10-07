import React from 'react'
import Mycontext from './MyContext'
import { useContext } from 'react'

const Child = () => {
  // const {mydata,theme} = useContext(Mycontext)
  const theme = useContext(Mycontext)
  return (
    <>
    <div style={theme.dark}></div>
    <h3>Chil Data</h3>
    <p>Myname is {mydata.name} and age is {mydata.age}</p>
    </>
  )
}

export default Child
