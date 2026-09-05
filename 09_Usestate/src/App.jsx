import React, { useState } from 'react'

const App = () => {

  // const [a , setname]=useState("Garry");
  // const [b ,setage]=useState(22)
  // function changenum(){
  //   setname('Kartik');
  //   setage(21);
  // }


  const [num,setnum]=useState(0);
  function inc(){
    setnum(num+1);
  }
  function dec(){
    setnum(num-1);
  }
  return (
    <div>
      {/* <h1>hiii I am {a}<br/>   My age is {b}
      </h1>
      <button onClick={changenum}>Click</button> */}
        <h1>{num}</h1>
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>decrease</button>

    </div>
  )
}

export default App
