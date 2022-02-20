import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, BrowserRouter, Routes } from "react-router-dom";
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

class App extends Component {

  state = {
    name : "en-US"

  }

  onChangeLanguage = (value) => {
   this.setState({
     name: value
   });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <NavbarTop changeLanguage={(value) => this.onChangeLanguage(value)}></NavbarTop>
          <Navbar />      
          <Routes>
            <Route exact path="/" element={<Home languageCode={this.state.name}/> } />
            <Route exact path="/visionAndMission" element={<VisionAndMission languageCode={this.state.name}/>} />
            <Route exact path="/award" element={<Award languageCode={this.state.name}/>} />
            <Route exact path="/history" element={<History languageCode={this.state.name}/>} />
            <Route exact path="/pressRelease" element={<PressRelease />} />
            <Route exact path="/event" element={<Event languageCode={this.state.name}/>} />
            <Route exact path="/career" element={<Career />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service languageCode={this.state.name}/>} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
