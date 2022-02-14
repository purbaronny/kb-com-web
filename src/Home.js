import React, { Component } from "react";
import Common from "./Common";
import web from "../src/Pictures/img2.png";

class Home extends Component {
  render() {
    return (
      <>
        <Common name="Grow your business with" imgsrc={web} visit="/service" btname="Get started"/>
      </>
    );
  }
}

export default Home;
