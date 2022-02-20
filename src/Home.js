import React, { Component } from "react";
import Common from "./Common";
import web from "../src/Pictures/img2.png";

class Home extends Component {
  state = {
    languageCode: "en-US",
    text1: "Grow your business with",
    text2: "We're a team of talented developers that can help your business grow!",
    text3: "Get started"
  }

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

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps) {
    fetch("./homeData.json")
      .then(response => response.json())
      .then(result => {        
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          if(obj.languageCode == this.props.languageCode) {
            this.setState({
              languageCode: obj.languageCode,
              text1: obj.text1,
              text2: obj.text2,
              text3: obj.text3
             });
             break;  
          }
        }
        // console.log(result);
        // console.log(this.state.text1);
    });
  }

  render() {
    return (
      <>
        <Common name={this.state.text1} contentText={this.state.text2} imgsrc={web} visit="/service" btname={this.state.text3} />
      </>
    );
  }
}

export default Home;
