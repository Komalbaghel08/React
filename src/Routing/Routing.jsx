import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Rhome from "./Rhome";
import Rabout from "./Rabout";
import Rcontact from "./Rcontact";
import Layout from "./Layout";
import { HiH1 } from "react-icons/hi2";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="Home" element={<Rhome />} />
        <Route path="About" element={<Rabout />} />
        <Route path="Contact" element={<Rcontact />} />
        <Route path="*" element={<h1>ERROR</h1>} />
      </Route>
      </Routes>
    </>
  );
};
export default App;