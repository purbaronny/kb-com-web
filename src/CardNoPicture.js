import React, { Component } from "react";
import "./CardNoPicture.css";


class CardNoPicture extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (




      <div className="col-md-4 col-10 mx-auto">
        <div id="border" className="card" >
          <div className="card-header bg-warning">
            <h5 className="card-title text-center">{this.props.title}</h5>
          </div>
          <div className="card-body justify-content-center">
            <h5 className="card-title text-center">{this.props.title1}</h5>
            <p className="card-text">{this.props.text1}
            </p>
          </div>
        </div>
      </div>

    );
  }
}

export default CardNoPicture;
