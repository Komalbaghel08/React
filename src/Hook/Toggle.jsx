import React from "react";
import { useState } from "react";
import Component from "./Component";

const Toggle = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <h1>Toggle in React JS</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>

      {display ? <Component/>: null}
      {/* {display ? <h1>Komal Singh</h1> : null} */}
    </>
  );
};

export default Toggle;
