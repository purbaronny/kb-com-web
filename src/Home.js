import React, { Component } from "react";
import Common from "./Common";
import web from "../src/Pictures/team-work.jpg";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Carousel2 from "./Carousel2";
import CarouselSlider from "./CarouselSlider";

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
    fetch("./homeData.json")
      .then(response => response.json())
      .then(result => {
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          if (obj.languageCode === this.props.languageCode) {
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

  static getDerivedStateFromProps(props, state) {
    return { languageCode: props.languageCode };
  }

  componentDidUpdate(prevProps) {
    fetch("./homeData.json")
      .then(response => response.json())
      .then(result => {
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          if (obj.languageCode === this.props.languageCode) {
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
      <div style={{ marginTop: 25 }}>
        {/* <Carousel /> */}
        <Carousel2 />
        {/* <CarouselSlider /> */}
        <Common name={this.state.text1} contentText={this.state.text2} imgsrc={web} visit="/visionAndMission" btname={this.state.text3} />
        <Footer />
      </div>
    );
  }
}

export default Home;
