import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavbarTop extends Component {
  render() {
    return (
      <>
        <div className="container-fluid nav_bg" style = {{display:"flex", width: "80%", justifyContent:'flex-end'}}>
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/">ENG</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" className="nav-link" to="/service">ID</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" className="nav-link" to="/about">Login</NavLink>
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

export default NavbarTop;
