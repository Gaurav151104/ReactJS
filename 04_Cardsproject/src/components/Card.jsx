
import { Bookmark } from "lucide-react";
const Card = (props) => {

  console.log(props.company)
  return (
     <div className="card">
              <div>
                <div className="top">
                <img
                  src={props.logo}
                  alt=""
                />
                <button>
                  Save <Bookmark size={11}/>
                </button>
              </div>
              <div className="center">
                <h3>
                  {props.company}<span> {props.tag2}</span>
                </h3>
                <h2>{props.pos}</h2>
                <div className="tag">
                  <h4>Part-Time</h4>
    
                  <h4>{props.tag1}</h4>
                </div>
              </div>
              </div>
              <div className="bottom">
                <div className="footer">
                    <h3>{props.pr}</h3>
                    <p>{props.loc}</p>
                </div>
                <div>
                  <button>Apply now</button>
                </div>
              </div>
            </div>
  )
}

export default Card
