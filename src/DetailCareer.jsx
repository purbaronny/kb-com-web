import React, { Component } from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./DetailCareer.css";
import { useParams } from 'react-router-dom';

class DetailCareer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      languageCode: props.languageCode
    }

    // console.log(this.getId());
    console.log(this.props);
  }

  // getId(){
  //   const {id} = useParams();
  //   return id;
  // }

  changeLanguage = (val) => {
    this.props.changeLanguage(val);
  }

  onLanguageClick = (value) => {
    this.setState({
      languageCode: value
    }, () => {
      this.changeLanguage(this.state.languageCode);
    });
  }

  static getDerivedStateFromProps(props, state) {
    return { languageCode: props.languageCode };
  }

  componentDidMount() {

    //console.log(this.props.match);
  }

  componentDidUpdate(prevProps) {

    //console.log(this.props);

  }

  render() {
    return (
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">{this.state.languageCode}</h5>
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.state.languageCode}</h5>
            <p className="card-text">{this.state.languageCode}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default DetailCareer;
