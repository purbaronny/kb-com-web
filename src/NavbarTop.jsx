import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarTop.css";

class NavbarTop extends Component {

  state = {
    languageCode: "en"
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
                      <button className="button-no-background" onClick={() => this.onLanguageClick("en-US")}>ENG</button>
                    </li>
                    <li className="nav-item">
                      <button className="button-no-background" onClick={() => this.onLanguageClick("id-ID")}>ID</button>
                    </li>
                    <li className="nav-item">
                      <button className="button-no-background">Login</button>
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
