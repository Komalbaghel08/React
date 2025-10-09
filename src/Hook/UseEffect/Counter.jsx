import React, { useEffect } from "react";

const Counter = ({ count }) => {
  const handleCounter = () => {
    console.log("handleCounter called");
  };
useEffect(()=>{
    handleCounter();
},[])
  return (
    <>
      <h1>Counter Value {count}</h1>
    </>
  );
};

export default Counter;
