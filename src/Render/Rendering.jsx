import React, { useState } from 'react'

const Rendering = () => {
let[login,setlogin] = useState(false)
let ans
if(login){
    ans=<h1>Welcome</h1>
}
else{
ans = <h1>please login</h1>
}
  return (
   
   <>
{ans}
<button onClick={()=>{setlogin(!login)}}>
    {login ? "logout":"login"}
</button>

  
   </>
  )
}

export default Rendering