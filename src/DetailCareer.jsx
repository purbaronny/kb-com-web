import React, { Component } from 'react';

import "./DetailCareer.css";

class DetailCareer extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <div className="card-header">
                <h5 className="card-title">{this.props.title}</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">{this.props.title1}</h5>
              <p className="card-text">{this.props.text1}
              </p>
            </div>
          </div>
        </div>
        );
    }
}
export default DetailCareer;
