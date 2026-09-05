import React, { useState } from "react";

const App = () => {
  // const [num, setnum] = useState({ User: "garry" });

  const [num,setnum]=useState([10,20,30]);

  const BtnClicked = () => {
    const newnum = [...num];
    newnum.push(100);
    setnum(newnum);
  };
  return (
    <div>
      {/* <h1>hi i am {num.User}</h1> */}
      <h1>This is{num}</h1>
      <button onClick={BtnClicked}>Click me </button>
    </div>
  );
};

export default App;
