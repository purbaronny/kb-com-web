import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Home from "./Home";
import VisionAndMission from "./VisionAndMission";
import Award from "./Award";
import About from "./About";
import History from "./History";
import Contact from "./Contact";
import Service from "./Service";
import PressRelease from "./PressRelease";
import Event from "./Event";
import Navbar from "./Navbar";
import NavbarTop from "./NavbarTop";
import Career from "./Career";
import ContactUs from "./ContactUs";
import DetailCareer from "./DetailCareer";
import DetailCareerExperimen from "./DetailCareerExperimen";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "en-US",
      languageCode: "en-US",
      text1: "Grow your business with",
      text2: "We're a team of talented developers that can help your business grow!",
      text3: "Get started"
    };
  }


  onChangeLanguage = (value) => {
    this.setState({
      name: value,
      languageCode: value
    });

    fetch("./homeData.json")
      .then(response => response.json())
      .then(result => {
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          if (obj.languageCode === value) {
            this.setState({
              name: value,
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

  componentDidUpdate(prevProps) {
    // alert("siapa");
    fetch("./homeData.json")
      .then(response => response.json())
      .then(result => {
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          if (obj.languageCode === this.props.languageCode) {
            this.setState({
              name: obj.languageCode,
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
      }, () => {
        //alert(this.state.name);
      });
    // alert(this.state.name);
  }
  componentDidMount() {

    // alert("ahll");
  }

  onLanguageClick = (value) => {
    // window.open("/visionAndMission", "_parent");
    // this.props.history.push(`/visionAndMission`);
  }

  render() {
    return (
      <>
        <BrowserRouter>

          <Navbar languageCode={this.state.name} changeLanguage={(value) => this.onChangeLanguage(value)} />

          <Routes>
            <Route exact path="/" element={<Home languageCode={this.state.name} />} />
            <Route exact path="/visionAndMission" element={<VisionAndMission languageCode={this.state.name} />} />
            <Route exact path="/award" element={<Award languageCode={this.state.name} />} />
            <Route exact path="/history" element={<History languageCode={this.state.name} />} />
            <Route exact path="/pressRelease" element={<PressRelease />} />
            <Route exact path="/event" element={<Event languageCode={this.state.name} />} />
            <Route exact path="/career" element={<Career languageCode={this.state.name} />} />
            <Route exact path="/contactUs" element={<ContactUs languageCode={this.state.name} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service languageCode={this.state.name} />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/event" element={<Event />}></Route>
            <Route exact path="/PressRelease" element={<Event />}></Route>
            <Route path="/career/:id/:languageCode" element={<DetailCareerExperimen />} />

          </Routes>

        </BrowserRouter>


      </>
    );
  }
}

export default App;
