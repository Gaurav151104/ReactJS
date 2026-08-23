import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
         <img src="https://images.unsplash.com/photo-1773332598451-8a0a59941912?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       
        <button>View Profile</button>
      </div>

  )
}

export default Card
