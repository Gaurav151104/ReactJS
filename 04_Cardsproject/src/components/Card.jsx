import React from 'react'
import { Bookmark } from "lucide-react";
const Card = () => {
  return (
     <div className="card">
              <div>
                <div className="top">
                <img
                  src="https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?r=0&pid=Api&P=0&h=180"
                  alt=""
                />
                <button>
                  Save <Bookmark size={11}/>
                </button>
              </div>
              <div className="center">
                <h3>
                  Amazon<span> 5 Days Ago</span>
                </h3>
                <h2>Senior Ui/UX Designer</h2>
                <div className="tag">
                  <h4>Part Time</h4>
    
                  <h4>Senior level</h4>
                </div>
              </div>
              </div>
              <div className="bottom">
                <div className="footer">
                    <h3>120$/hr</h3>
                    <p>Mumbai</p>
                </div>
                <div>
                  <button>Apply now</button>
                </div>
              </div>
            </div>
  )
}

export default Card
