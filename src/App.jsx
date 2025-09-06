import React from "react";
import reactLogo from "./assets/react.svg";
import { FaHome } from "react-icons/fa";
// import Header from "./Header";
// import Footer from "./Footer";
// import "./App.css";

// export default function App() {
//   const name = "Komal";
//   const age = 22;

//   return (
//     <div>
//       <Header />
//       <main style={{ padding: "20px" }}>
//         <p>Name: {name}</p>
//         <p>Age: {age}</p>
//         <p className="para">Lorem ipsum dolor uod dolor perferendis alias recusandae, ut nesciunt vero quos quam dolorem veniam rerum quia quisquam asperiores ipsam ex fuga et.</p>
//       </main>
//       <Footer />
//     </div>
//   );
// }
function App() {
  return (
    <div>
      <FaHome />
      <img src={reactLogo} alt="React Logo" width="150" />
    </div>
  );
}
export default App;