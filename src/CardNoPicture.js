import React, { Component } from "react";
import "./CardNoPicture.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// digunakan di Services

class CardNoPicture extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4 col-10 mx-auto" data-aos="flip-right">
        <div className="card">
          <div className="card-header bg-warning">
            <h5 className="card-title text-center">{this.props.title}</h5>
          </div>
          <div className="card-body justify-content-center">
            <h5 className="card-title text-center">{this.props.title1}</h5>
            <p className="card-text">{this.props.text1}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardNoPicture;
