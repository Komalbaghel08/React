import React, { useState } from 'react'
import College from './College'
import { SubjectContext } from './ContextData'


const Context = () => {
  const[subject,setSubject] = useState('')
  return (
 <>
<div style={{backgroundColor:'yellow',padding:10}}>

<SubjectContext.Provider value={subject}>
  <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
    <option value="">Select subject</option>
    <option value="Math">Math</option>
    <option value="English">English</option>
    <option value="C++">C++</option>
    <option value="Python">Python</option>
    <option value="React">React</option>
  </select>
<h1>Context API</h1>
<button onClick={()=>setSubject('')}>Clear Subject</button>
 <College/>
</SubjectContext.Provider>
 

</div>
 </>

  )
}

export default Context