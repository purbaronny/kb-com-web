import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";
import DetailCareer from "./DetailCareer";


class Card extends Component {

  constructor(props) {
    super(props);
    let dateString=props.text1;
    let dateWhole=dateString.split("T");
    let dateResult=new Date(dateWhole[0]);

    this.state={
        date: dateResult.toLocaleString()
    }
  }

  
  render() {
    return (
        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <img src={this.props.imgsrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">Expired date : {this.state.date}</p>
              <Link to={`/career/${this.props.code}/${this.props.languageCode}`} className="btn btn-primary" key={this.props.code}> 
                {this.props.linkSourceText}
              </Link>
            </div>
          </div>
        </div>
    );    
  }
}

// function Card({ title, imgsrc }) {
//   return (
//     <>
//       <div className="col-md-4 col-10 mx-auto">
//         <div className="card">
//           <img src={imgsrc} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <NavLink to="/contact" className="btn btn-primary">
//               Get Quote
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default Card;
