import React, { useEffect, useState } from "react";

const Practice_UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

//   useEffect(() => {
//     callOnce();
//   }, [counter]);  ----> agr aik kisi ko count krana h ki ksii aik me hi kaam kre aik me nhi  toh [] iske andr jisko call krna pass kr deg usko

 useEffect(() => {
    callOnce();
  }, []);
  function callOnce() {
    console.log("callOnce function called",counter);
  }

  return (
    <>
      <h1>useEffect Hook</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter{counter}</button>
      <button onClick={() => setData(counter + 1)}>data{data}</button>
    </>
  );
};

export default Practice_UseEffect;
