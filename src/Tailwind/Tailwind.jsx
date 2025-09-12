import React from 'react'
import "./Tailwind.css"
import pic from '../assets/download.jpeg';
import pic1 from '../assets/download (2).jpeg';
import pic2 from '../assets/images.jpeg';


function Navbar() {
  return (
    <>
    <nav className="bg-fuchsia-400 text-white px-6 py-3 flex justify-between items-center">
    
      <h1 className="text-xl font-bold">MyWebsite</h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <button className='border rounded m-0.5 p-0.5 bg-fuchsia-300'>Search</button>
      </ul>
    </nav>
<div className='flex space-x-2.5 items-center justify-center h-screen text-center text-xl '>
 <div className='h-80 w-80 border rounded-2xl'>
  <img src={pic} alt="" />
 <p>Ayush singh <br />
  Btech(cse)
 </p>
 </div>
 <div className='h-80 w-80 border rounded-2xl '>
  <img src={pic1} alt="" />
  <p>Sankalp singh <br />
  BCA </p>
  </div>

 <div className='h-80 w-80 border rounded-2xl '>
  <img src={pic} alt="" />
  <p>Sankalp singh <br />
  BCA </p>
  </div>

 <div className='h-80 w-80 border rounded-2xl '><img src={pic1} alt="" />    <p>Sankalp singh <br />
  BCA </p></div>

 <div className='h-80 w-80 border rounded-2xl '><img src={pic} alt="" />    <p>Sankalp singh <br />
  BCA </p></div>
</div>
    </>
  );
}

export default Navbar;
