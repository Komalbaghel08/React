import { useState } from "react";

const App = ()=>{
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [num,setnum] = useState("")
    const [pass,setpass] = useState("")
   
    return (
        <>
            <h1>Form</h1>   

            

            <form action="">
                <h1>{name}</h1>
                Name <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} /> <br /> <br />
                <h1>{email}</h1>
                Email <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} /><br /> <br />
                <h1>{num}</h1>
                Contact <input type="text" value={num} onChange={(e)=>{setnum(e.target.value)}} /><br /> <br />
                <h1>{pass}</h1>
                password <input type="text"value={pass} onChange={(e)=>{setpass(e.target.value)}} /><br /> <br />
              
               <button type="submit">Sign up</button>
            </form>
        </>
    )

}
export default App