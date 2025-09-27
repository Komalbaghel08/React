import { useState } from "react";
const App = ()=>{
    // const [name,setname] = useState("")
    // const [email,setemail] = useState("")
    // const [num,setnum] = useState("")
    // const [pass,setpass] = useState("")
    const[formdata , setformData]=useState({

        name:"",
        email:"",
        num:"",
        pass:""
    })
   let changeimp =(e)=>{
      setformData({
        ...formdata,
        [e.target.name]:e.target.value
      })
   }


    let handlesubmit=(e)=>{
        e.preventDefault() //to prevent form reloading
        alert("form submitted")
    }

    return (
        <>
            <h1>Form</h1>   
            
            <form onSubmit={handlesubmit}>
                <h1>{formdata.name}</h1>
                Name <input type="text" name="name" value={formdata.name} onChange = {changeimp}/> <br /> <br />
                <h1>{formdata.email}</h1>
                Email <input type="text" name="email" value={formdata.email} onChange={changeimp} /><br /> <br />
                <h1>{formdata.num}</h1>
                Contact <input type="text" name="num" value={formdata.num} onChange={changeimp} /><br /> <br />
                <h1>{formdata.pass}</h1>
                password <input type="text" name="pass" value={formdata.pass} onChange={changeimp} /><br /> <br />
              
               <button type="submit">Sign up</button>
            </form>
        </>
    )

}
export default App