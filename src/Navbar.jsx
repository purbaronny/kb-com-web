import Dropdown from "react-bootstrap/Dropdown";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";


class Navbar extends Component {
  constructor(props) {
    super(props);
    if (props.languageCode === "en-US") {
      this.state = {
        languageCode: "en-US",
        titleAbout: "About",
        titleAboutCompanyOverview: "Company Overview",
        titleAboutVisionMission: "Vision & Mission",
        titleAboutBusinessDomain: "Business Domain",
        titleAboutAchievements: "Achievements",
        titleAboutCoreValues: "Core Values",
        titleSolution: "Solution",
        titleSolutionGroupJoin1:
          "Group Join Systems Operation /",
        titleSolutionGroupJoin2: " Maintenance Overview",
        titleSolutionBankIT: "Bank IT Systems Operation Service",
        titleSolutionGroupCompany1:
          "Group Company /",
        titleSolutionGroupCompany2: "External Organization IT",
        titleSolutionGroupCompany3: "Systems Operation",
        titleCareerWithUs: "Career",
        titleContactUs: "Contact",
        language: "Languages",
        latest: "Latest Update",
        pressRelease: "Press Release",
        news: "News",

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
    } else if (props.languageCode === "ko-KR") {
      this.state = {
        languageCode: "ko-KR",
        titleAbout: "에 대한",
        titleAboutCompanyOverview: "회사 개요",
        titleAboutVisionMission: "비전 & 사명",
        titleAboutBusinessDomain: "비즈니스 도메인",
        titleAboutAchievements: "성취",
        titleAboutCoreValues: "닐라이 인티",
        titleSolution: "해결책",
        titleSolutionGroupJoin1: "그룹 가입 시스템 운영/",
        titleSolutionGroupJoin2: "유지보수 개요",
        titleSolutionBankIT: "은행 IT 시스템 운영 서비스",
        titleSolutionGroupCompany: "그룹사 / 외부조직 IT시스템 운영",
        titleCareerWithUs: "경력",
        titleContactUs: "문의하기",
        language: "언어",
        latest: "최근 업데이트",
        news: "소식 ",

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

        }]
      }
    } else if (props.languageCode === "id-ID") {
      this.state = {
        languageCode: "id-ID",
        titleAbout: "Tentang",
        titleAboutCompanyOverview: "Tinjauan Perusahaan",
        titleAboutVisionMission: "Visi & Misi",
        titleAboutBusinessDomain: "Domain Bisnis",
        titleAboutAchievements: "Prestasi",
        titleAboutCoreValues: "Nilai Inti",
        titleSolution: "Solusi",
        titleSolutionGroupJoin1: "Tinjauan Operasi / ",
        titleSolutionGroupJoin2: "Pemeliharaan Sistem Gabung Grup",
        titleSolutionBankIT: "Layanan Operasi Sistem TI Bank",
        titleSolutionGroupCompany1: "Grup Perusahaan / ",
        titleSolutionGroupCompany2: " Organisasi Eksternal",
        titleSolutionGroupCompany3: "Operasi Sistem TI",
        titleCareerWithUs: "Karir",
        titleContactUs: "Hubungi kami",
        language: "Bahasa",
        latest: "Pembaruan Terkini",
        news: "Berita",

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

        }]

      }
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
              titleSolutionGroupJoin1: obj.titleSolutionGroupJoin1,
              titleSolutionGroupJoin2: obj.titleSolutionGroupJoin2,
              titleSolutionBankIT: obj.titleSolutionBankIT,
              titleSolutionGroupCompany1: obj.titleSolutionGroupCompany1,
              titleSolutionGroupCompany2: obj.titleSolutionGroupCompany2,
              titleSolutionGroupCompany3: obj.titleSolutionGroupCompany3,
              titleCareerWithUs: obj.titleCareerWithUs,
              titleContactUs: obj.titleContactUs,
              latest: obj.latest,
              language: obj.language,
              news: obj.news,
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
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white-important" >
          <div className="container-fluid">
            <Link to="/#home"><img className="logo-kbds" src="./Pictures/logokbds-remove.png" ></img></Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto me-5" style={{ opacity: 0.75, alignItems: "center" }} >
                <li className="nav-item me-1 ">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" className=' item-nav' >{this.state.titleAbout}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><Link smooth={true} className="nav-link" style={{ color: "rgb(255, 188, 0)   " }} to="visionAndMission#companyOverview">{this.state.titleAboutCompanyOverview}</Link></Dropdown.Item>
                      <Dropdown.Item><Link smooth={true} className="nav-link" style={{ color: "rgb(255, 188, 0)   " }} to="visionAndMission#visionMission">{this.state.titleAboutVisionMission}</Link></Dropdown.Item>
                      <Dropdown.Item><Link smooth={true} className="nav-link" style={{ color: "rgb(255, 188, 0)   " }} to="visionAndMission#businessDomain">{this.state.titleAboutBusinessDomain}</Link></Dropdown.Item>
                      <Dropdown.Item><Link smooth={true} className="nav-link" style={{ color: "rgb(255, 188, 0)   " }} to="visionAndMission#achievements">{this.state.titleAboutAchievements}</Link></Dropdown.Item>
                      <Dropdown.Item><Link smooth={true} className="nav-link" style={{ color: "rgb(255, 188, 0)   " }} to="visionAndMission#coreValues">{this.state.titleAboutCoreValues}</Link></Dropdown.Item>






                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item me-1">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" className=' item-nav' >{this.state.titleSolution}</Dropdown.Toggle>
                    <Dropdown.Menu className="justify-content-end">
                      <Dropdown.Item><Link smooth={true} className="nav-link" style={{ color: "rgb(255, 188, 0)   " }} to="service#companyMaintenance">{this.state.titleSolutionGroupJoin1}<br></br>{this.state.titleSolutionGroupJoin2}</Link></Dropdown.Item>
                      <Dropdown.Item><Link smooth={true} className="nav-link" style={{ color: "rgb(255, 188, 0)   " }} to="service#companyService">{this.state.titleSolutionBankIT}</Link></Dropdown.Item>
                      <Dropdown.Item><Link smooth={true} className="nav-link" style={{ color: "rgb(255, 188, 0)   " }} to="service#companyOperation">{this.state.titleSolutionGroupCompany1}<br></br>{this.state.titleSolutionGroupCompany2}<br></br>{this.state.titleSolutionGroupCompany3}</Link></Dropdown.Item>



                      {/* <NavLink className="nav-link" to="/service#companyMaintenance" style={{ color: "rgb(255, 188, 0)   " }} >{this.state.titleSolutionGroupJoin}</NavLink>
                      <NavLink className="nav-link" to="/service#companyService" style={{ color: "rgb(255, 188, 0)   " }}>{this.state.titleSolutionBankIT}</NavLink>
                      <NavLink className="nav-link" to="/service#companyOperation" style={{ color: "rgb(255, 188, 0)   " }}>{this.state.titleSolutionGroupCompany}</NavLink> */}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item me-1">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" className=' item-nav' closedButton>{this.state.latest}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><Link className="nav-link" to="/career#career" style={{ color: "rgb(255,188,0)" }} >{this.state.titleCareerWithUs}</Link></Dropdown.Item>
                      <Dropdown.Item><Link className="nav-link" to="/news#news" style={{ color: "rgb(255, 188, 0)" }}>{this.state.news}</Link></Dropdown.Item>


                      {/* <NavLink className="nav-link" to="/PressRelease" style={{ color: "rgb(255, 188, 0)" }}>{this.state.pressRelease}</NavLink> */}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li className="nav-item me-1">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" className=' item-nav'>{this.state.language}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => this.onLanguageClick("en-US")}>
                        <p style={{ color: "rgb(255, 188, 0)", fontFamily: "KBFG Display", fontSize: 14 }}>  <img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" className="rounded-circle shadow" alt="ENG" style={{ width: 25, height: 25 }} />ENG</p>

                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => this.onLanguageClick("id-ID")}>
                        <p style={{ color: "rgb(255, 188, 0)", fontFamily: "KBFG Display", fontSize: 14 }}>  <img src="https://flagicons.lipis.dev/flags/4x3/id.svg" className="rounded-circle shadow" alt="ENG" style={{ width: 25, height: 25 }} />ID</p>

                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => this.onLanguageClick("ko-KR")}>
                        <p style={{ color: "rgb(255, 188, 0)", fontFamily: "KBFG Display", fontSize: 14 }}>  <img src="https://flagicons.lipis.dev/flags/4x3/kr.svg" className="rounded-circle shadow" alt="ENG" style={{ width: 25, height: 25 }} />KR</p>

                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item me-1">
                  <Link className="item-nav nav-no-dropdown" to="/contactUs#contact">{this.state.titleContactUs}</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*
        <nav className="navbar navbar-expand-md fixed-top opacity-75">
          <div className="container-fluid navbar-collapse">
            <NavLink to="/"><img className="logo-kbds" src="./Pictures/logokbds-remove.png"></img></NavLink>
            <button className="navbar-light navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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