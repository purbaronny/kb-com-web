import Dropdown from 'react-bootstrap/Dropdown';
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";





class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      languageCode: "en-US",
      titleAbout: "About",
      titleAboutCompanyOverview: "Company Overview",
      titleAboutVisionMission: "Vision & Mission",
      titleAboutBusinessDomain: "Business Domain",
      titleAboutAchievements: "Achievements",
      titleAboutCoreValues: "Core Values",
      titleSolution: "Solution",
      titleSolutionGroupJoin: "Group Join Systems Operation / Maintenance Overview",
      titleSolutionBankIT: "Bank IT Systems Operation Service",
      titleSolutionGroupCompany: "Group Company / External Organization IT Systems Operation",
      titleCareerWithUs: "Career With Us",
      titleContactUs: "Contact Us",
      menus: [{
        menu: {
          code: "about",
          title: "About",
          dropDownFlag: true,
          navigateTo: "",
          dropDownMenus: [{
            dropDownMenu: {
              code: "co",
              title: "Company Overview",
              navigateTo: "/visionAndMission/#companyOverview",
            },
            dropDownMenu: {
              code: "cm",
              title: "Vision & Mission",
              navigateTo: "/visionAndMission/#visionMision",
            },
            dropDownMenu: {
              code: "bd",
              title: "Business Domain",
              navigateTo: "/visionAndMission/#businessDomain",
            },
            dropDownMenu: {
              code: "ac",
              title: "Achievements",
              navigateTo: "/visionAndMission/#achievements",
            },
            dropDownMenu: {
              code: "cv",
              title: "Core Values",
              navigateTo: "/visionAndMission/#coreValues",
            }
          }]
        },
        menu: {
          code: "solution",
          title: "Solution",
          dropDownFlag: true,
          navigateTo: "",
          dropDownMenus: [{
            dropDownMenu: {
              code: "gj",
              title: "Group Join Systems Operation / Maintenance Overview",
              navigateTo: "/service/#companyMaintenance",
            },
            dropDownMenu: {
              code: "bit",
              title: "Bank IT Systems Operation Service",
              navigateTo: "/service/#companyService",
            },
            dropDownMenu: {
              code: "gc",
              title: "Group Company/External Organization IT Systems Operation",
              navigateTo: "/service/#companyExternal",
            }
          }]
        }
      }]
    }
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

  static getDerivedStateFromProps(props, state) {
    return { languageCode: props.languageCode };
  }

  componentDidUpdate(prevProps) {
    fetch("./navbarData.json")
      .then(response => response.json())
      .then(result => {
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          if (obj.languageCode === this.props.languageCode) {
            this.setState({
              languageCode: obj.languageCode,
              titleAbout: obj.titleAbout,
              titleAboutCompanyOverview: obj.titleAboutCompanyOverview,
              titleAboutVisionMission: obj.titleAboutVisionMission,
              titleAboutBusinessDomain: obj.titleAboutBusinessDomain,
              titleAboutAchievements: obj.titleAboutAchievements,
              titleAboutCoreValues: obj.titleAboutCoreValues,
              titleSolution: obj.titleSolution,
              titleSolutionGroupJoin: obj.titleSolutionGroupJoin,
              titleSolutionBankIT: obj.titleSolutionBankIT,
              titleSolutionGroupCompany: obj.titleSolutionGroupCompany,
              titleCareerWithUs: obj.titleCareerWithUs,
              titleContactUs: obj.titleContactUs
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


        <nav className="navbar navbar-expand-lg bg-white  shadow">
          <div className="container">
            <NavLink className="navbar-brand" to="/"><img className="logo-kbds" src="./Pictures/logokbds-remove.png"></img></NavLink>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basicAbout" className='background-white' style={{ color: "rgb(255, 188, 0)   " }}>{this.state.titleAbout}</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <NavLink className="nav-link" to={{ pathname: "/visionAndMission", hash: "#companyOverview", state: { fromDashboard: true } }}>{this.state.titleAboutCompanyOverview}</NavLink>
                      <NavLink className="nav-link" to={{ pathname: "/visionAndMission", hash: "#visionMission", state: { fromDashboard: true } }}>{this.state.titleAboutVisionMission}</NavLink>
                      <NavLink className="nav-link" to={{ pathname: "/visionAndMission", hash: "#businessDomain", state: { fromDashboard: true } }}>{this.state.titleAboutBusinessDomain}</NavLink>
                      <NavLink className="nav-link" to={{ pathname: "/visionAndMission", hash: "#achievements", state: { fromDashboard: true } }}>{this.state.titleAboutAchievements}</NavLink>
                      <NavLink className="nav-link" to={{ pathname: "/visionAndMission", hash: "#coreValues", state: { fromDashboard: true } }}>{this.state.titleAboutCoreValues}</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle variant="successSolution" id="dropdown-basicSolution" className='background-white' style={{ color: "rgb(255, 188, 0)   " }}>{this.state.titleSolution}</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <NavLink className="nav-link" to="/service#companyMaintenance">{this.state.titleSolutionGroupJoin}</NavLink>
                      <NavLink className="nav-link" to="/service#companyService">{this.state.titleSolutionBankIT}</NavLink>
                      <NavLink className="nav-link" to="/service#companyOperation">{this.state.titleSolutionGroupCompany}</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/career" style={{ color: "rgb(255, 188, 0)   " }}>{this.state.titleCareerWithUs}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contactUs">{this.state.titleContactUs}</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>



      </>
    );
  }
}

export default Navbar;
