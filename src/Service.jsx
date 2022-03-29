import React, { Component } from "react";
import "./Service.css";
import CardNoPicture from "./CardNoPicture";
import Footer from "./Footer";

class Service extends Component {

  constructor(props) {
    super(props);
    this.state = {
      languageCode: "en-US",
      titleCompanyMaintenance: "Group Join Systems Operation / Maintenance",
      subTitlecompanyMaintenanceitle: "Integrated security control",
      textCompanyMaintenance1: "To provide stable IT services to KB Financial Group affiliates, various security solutions such as web firewall (WAF), intrusion prevention system (IPS), and DDoS blocking are used to monitor, analyze, respond, and prevent various security threats in real-time 24x365. (24 hours a day, 365 days a year) to protect the information assets of KB Financial Group. In addition, before providing the homepage and mobile app services of KB Financial Group affiliates, we conduct regular preventive activities by inspecting vulnerable areas exposed to external intrusion.",
      titleCompanyService: "Bank IT Systems Operation Service",
      subTitleCompanyService: "Global financial business operation",
      textCompanyService1: "There is in charge of development and operation from the core business of the overseas branch and corporate IT system operated for KB Kookmin Bank's global expansion to non-face-to-face business in the digital sector. Local IT was established in Indonesia in line with KB Financial Group's global expansion strategy As an IT strategic asset that promotes KB Financial Group's global strategy, the corporation is advancing into the global ICT market and discovering digital financial business models.",
      titleCompanyOperation: "Group Company / External Organization IT Systems Operation",
      subTitleCompanyOperation: "KB Financial Group affiliates",
      textCompanyOperation1: "We provide 24*365 reliable IT services ranging from kb financial holdings, securities, damage insurance, national card, capital, life insurance, etc. to system operation and management of KB Financial Group affiliates, core system to channel services such as call center, homepage, and various mobile apps."
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

  componentDidMount() {
    fetch("./serviceData.json")
      .then(response => response.json())
      .then(result => {
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          if (obj.languageCode === this.props.languageCode) {
            this.setState({
              languageCode: obj.languageCode,
              titleCompanyMaintenance: obj.titleCompanyMaintenance,
              subTitlecompanyMaintenanceitle: obj.subTitlecompanyMaintenanceitle,
              textCompanyMaintenance1: obj.textCompanyMaintenance1,
              titleCompanyService: obj.titleCompanyService,
              subTitleCompanyService: obj.subTitleCompanyService,
              textCompanyService1: obj.textCompanyService1,
              titleCompanyOperation: obj.titleCompanyOperation,
              subTitleCompanyOperation: obj.subTitleCompanyOperation,
              textCompanyOperation1: obj.textCompanyOperation1
            });
            break;
          }
        }
        // console.log(result);
        // console.log(this.state.text1);
      });
  }

  componentDidUpdate(prevProps) {
    fetch("./serviceData.json")
      .then(response => response.json())
      .then(result => {
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          if (obj.languageCode === this.props.languageCode) {
            this.setState({
              languageCode: obj.languageCode,
              titleCompanyMaintenance: obj.titleCompanyMaintenance,
              subTitlecompanyMaintenanceitle: obj.subTitlecompanyMaintenanceitle,
              textCompanyMaintenance1: obj.textCompanyMaintenance1,
              titleCompanyService: obj.titleCompanyService,
              subTitleCompanyService: obj.subTitleCompanyService,
              textCompanyService1: obj.textCompanyService1,
              titleCompanyOperation: obj.titleCompanyOperation,
              subTitleCompanyOperation: obj.subTitleCompanyOperation,
              textCompanyOperation1: obj.textCompanyOperation1
            });
            break;
          }
        }
        // console.log(result);
        // console.log(this.state.text1);
      });
  }

  static getDerivedStateFromProps(props, state) {
    return { languageCode: props.languageCode };
  }

  render() {
    return (
      <>
        <div className="target" style={{ marginTop: 50 }}>
          <section id="companyMaintenance" className="Header">
            <div className="my-5">
              <h1 className="text-center">{this.state.titleCompanyMaintenance}</h1>
            </div>

            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-10 mx-auto" id="text">
                  <CardNoPicture title={this.state.subTitlecompanyMaintenanceitle} text1={this.state.textCompanyMaintenance1} />
                </div>
              </div>
            </div>
          </section>

          <section id="companyService" className="Header">
            <div className="my-5">
              <h1 className="text-center">{this.state.titleCompanyService}</h1>
            </div>

            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-10 mx-auto" id="text">
                  <CardNoPicture title={this.state.subTitleCompanyService} text1={this.state.textCompanyService1} />
                </div>
              </div>
            </div>
          </section>

          <section id="companyOperation" className="Header">
            <div className="my-5">
              <h1 className="text-center">{this.state.titleCompanyOperation}</h1>
            </div>

            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-10 mx-auto" id="text">
                  <CardNoPicture title={this.state.subTitleCompanyOperation} text1={this.state.textCompanyOperation1} />

                </div>

              </div>
              <Footer />
            </div>
          </section>
        </div>


      </>
    );
  }
}

export default Service;
