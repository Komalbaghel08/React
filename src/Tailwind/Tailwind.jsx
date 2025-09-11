import React from 'react'
import "./Tailwind.css"
import pic from '../assets/download.jpeg';


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
    <main>

      <section className='w-full h-screen border bg-[url()]'>

      </section>
    </main>
    <div className='align-middle'><img src={pic} alt="" /></div>
    </>
  );
}

export default Navbar;
