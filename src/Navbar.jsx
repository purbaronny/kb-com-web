import Dropdown from "react-bootstrap/Dropdown";
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
      titleSolutionGroupJoin:
        "Group Join Systems Operation / Maintenance Overview",
      titleSolutionBankIT: "Bank IT Systems Operation Service",
      titleSolutionGroupCompany:
        "Group Company / External Organization IT Systems Operation",
      titleCareerWithUs: "Career",
      titleContactUs: "Contact",
      language: "Language",
      press: "News",

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
  //navbar-expand-lg>navbar-nav mengakibatkan min-width>992 position:absolute
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top  opacity-75" >
          <div class="container">
            <NavLink to="/"><img className="logo-kbds md-4" src="./Pictures/logokbds-remove.png" data-tilt  ></img></NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto me-5" >
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
                  <NavLink className="nav-link" to="/career" style={{ color: "rgb(255, 188, 0)" }}>{this.state.titleCareerWithUs}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contactUs" style={{ color: "rgb(255, 188, 0)" }}>{this.state.titleContactUs}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/event" style={{ color: "rgb(255, 188, 0)" }}>{this.state.press}</NavLink>
                </li>
                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle variant="successSolution" id="dropdown-basicSolution" className='background-white' style={{ color: "rgb(255, 188, 0)   " }}>{this.state.language}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <li className="nav-item">
                        <button className="button-no-background" style={{ color: "rgb(255, 188, 0)", fontSize: 12 }} onClick={() => this.onLanguageClick("en-US")}><img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" className="rounded-circle shadow" alt="ENG" style={{ width: 25, height: 25 }} />ENG</button>
                      </li>
                      <li className="nav-item">
                        <button className="button-no-background" style={{ color: "rgb(255, 188, 0)", fontSize: 12 }} onClick={() => this.onLanguageClick("id-ID")}><img src="https://flagicons.lipis.dev/flags/4x3/id.svg" className="rounded-circle shadow" alt="ENG" style={{ width: 25, height: 25 }} />ID</button>
                      </li>
                      <li className="nav-item">
                        <button className="button-no-background" style={{ color: "rgb(255, 188, 0)", fontSize: 12 }} onClick={() => this.onLanguageClick("ko-KR")}><img src="https://flagicons.lipis.dev/flags/4x3/kr.svg" className="rounded-circle shadow" alt="ENG" style={{ width: 25, height: 25 }} />KR</button>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>


            </div>



          </div>
        </nav>
        {/*
        <nav className="navbar navbar-expand-md fixed-top opacity-75">
          <div className="container-fluid navbar-collapse">
            <NavLink to="/"><img className="logo-kbds" src="./Pictures/logokbds-remove.png"></img></NavLink>
            <button className="navbar-light navbar-toggler " type="button" >
              <span className="navbar-toggler-icon navbar-collapse"></span>
            </button>
            <div className="flex-column">
              <div className="collapse navbar-collapse" >
                <ul className="navbar-nav ms-auto mb-2 me-5">
                  <li className="nav-item">
                    <button className="button-no-background" style={{ color: "rgb(255, 188, 0)" }} onClick={() => this.onLanguageClick("en-US")}><img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" className="rounded-circle shadow" alt="ENG" style={{ width: 25, height: 25 }} /></button>
                  </li>
                  <li className="nav-item">
                    <button className="button-no-background" style={{ color: "rgb(255, 188, 0)" }} onClick={() => this.onLanguageClick("id-ID")}><img src="https://flagicons.lipis.dev/flags/4x3/id.svg" className="rounded-circle shadow" alt="ID" style={{ width: 25, height: 25 }} /></button>
                  </li>
                  <li className="nav-item">
                    <button className="button-no-background" style={{ color: "rgb(255, 188, 0)" }} onClick={() => this.onLanguageClick("ko-KR")}><img src="https://flagicons.lipis.dev/flags/4x3/kr.svg" className="rounded-circle shadow" alt="KR" style={{ width: 25, height: 25 }} /></button>
                  </li>
                </ul>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto me-5" >
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
                    <NavLink className="nav-link" to="/career" style={{ color: "rgb(255, 188, 0)" }}>{this.state.titleCareerWithUs}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contactUs">{this.state.titleContactUs}</NavLink>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </nav>
    */}
      </>
    )
  }
}
export default Navbar;