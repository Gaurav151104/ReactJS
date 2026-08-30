import React from 'react'

const App = () => {

  //  const pagescrolling=()=>{
  //     console.log("HEu mouse");
      
  //   }
  function btnClicked(){
    console.log('Hello');
  }

  return (
    // <div onWheel={(elem)=>{
    //   pagescrolling(elem);
    // }}>
    //   <div className="page1"></div>
    //   <div className="page2"></div>
    //   <div className="page3"></div>
    // </div>

    <div>
      <button onClick={btnClicked}>
        Click
      </button>
    </div>
  )
}

export default App
