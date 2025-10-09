import React, { useEffect, useState } from "react";

const UseEffect = () => {
  let [count, setcount] = useState(0);

  useEffect(() => {
    console.log("Running");
  }, []);
  return (
    <>
      {useEffect}
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default UseEffect;
