import React, { Component } from "react";
import Common from "./Common";
import web from "../src/Pictures/img3.png";

class About extends Component {
  render() {
    return (
      <>
        <Common name="Welcome to the world of" imgsrc={web} visit="/contact" btname="Contact Us"/>
      </>
    );
  }
}

export default About;
