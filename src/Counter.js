import { useState, useEffect } from "react";

// Use React Hooks for incrementing, decrementing nd resetting the value of the counter.
// Also, print the value of count on the console by using useEffect hook.

function UseFormInputs(initialValue){
  const [value,setValue] = useState(initialValue)

  function handleChange(e){
    setValue(e.target.value)
  }
  return{
    value,
    setValue,
    onChange:handleChange
  };
}


function Counter() {
  const NumberInputs = UseFormInputs(0)

  function handlePlus(){
    NumberInputs.setValue(Number(NumberInputs.value)+1);
  }
  function handleMinus(){
    NumberInputs.setValue(Number(NumberInputs.value)-1);
  }
  function Reset(){
    NumberInputs.setValue(0);
  }
  useEffect(()=>{
    console.log("value Changed",NumberInputs.value)
  },[NumberInputs.value])
  return (
    <>
      <p>Count value is:{NumberInputs.value} </p>
      <button onClick={Reset} >Reset</button>
      <button onClick={handlePlus}>Plus (+)</button>
      <button onClick={handleMinus}>Minus (-)</button>
    </>
  );
}

export default Counter;
