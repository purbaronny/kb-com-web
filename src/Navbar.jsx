import Dropdown from 'react-bootstrap/Dropdown';
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg">
                <NavLink className="navbar-brand" to="/">PT. KB Data Systems Indonesia</NavLink>
                <button className="navbar-toggler" type="button">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='background-white'>Company</Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item className="nav-link" href="/visionAndMission">Vision & Mission</Dropdown.Item>
                          <Dropdown.Item className="nav-link" href="/award">Awards</Dropdown.Item>
                          <Dropdown.Item className="nav-link" href="/history">History</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/service">Solutions</NavLink>
                    </li>                  
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/event">News</NavLink>
                    </li>
                    <li className="nav-item">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic"  className='background-white'>About</Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item className="nav-link" href="/about">About Us</Dropdown.Item>
                          <Dropdown.Item className="nav-link" href="/career">Career</Dropdown.Item>
                          <Dropdown.Item className="nav-link" href="/contact">Contatc Us</Dropdown.Item>                          
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>    
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }  
}

export default Navbar;
