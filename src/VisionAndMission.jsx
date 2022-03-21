import React, { Component } from "react";
import web from "../src/Pictures/Picture1.png";
import CardNoPicture from "./CardNoPicture2";
import "./VisionAndMission.css";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import CardNoPicture2 from "./CardNoPicture2";
// ..
AOS.init();

class VisionAndMission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageCode: "en-US",
      titleCompanyOverview: "Company Overview",
      textCompanyOverview1:
        "PT KB Data Systems Indonesia, a subsidiary of KB Data Systems, is a South east Asian-based financial IT specialized company established to exp and the business base/advance of Southeast Asian-focused affiliates and to provide global common IT services.",
      textCompanyOverview2:
        "KB Data Systems established PT KB Data Systems Indonesia, an Indonesian IT local corporation, to serve as a bridge in the global expansion of affiliates in connection with KB Financial Group's 'New Southern' strategy. As a result, we aim to secure a foundation for entry in to global financial IT and provide a global IT shared service by upgrading the local system.",
      textCompanyOverview3:
        "In Indonesia, the pinnacle of the financial group’s “2nd Mother Market strategy,” KB Data System, which has accumulated Korea’s Latest financial IT technology, and overseas subsidiaries that will play a pivotal role in the advancement of Indonesia's financial IT system by contributing to the promotion and dissemination of advanced financial technology capabilities.",
      visionTitle: "Vision",
      visionText1:
        "Finance that changes the world customer happiness and We make a better world",
      missionTitle: "Mission",
      missionText1:
        "With the best talent and bold innovation, trusted Financial IT Partner",
      titleBusinessDomain: "Business Domain",
      textBusinessDomain1:
        "We are carrying out various projects for financial IT Innovation",
      titleAchievements: "Achievements",
      titleCoreValues: "Core Values",
      cards: [
        {
          code: "cf",
          title: "Customer Focus",
          text1:
            "Putting the customer's position and interests first make judgments and make decisions",
        },
        {
          code: "pm",
          title: "Professionalism",
          text1:
            "Financial professionals with the highest level of competency in the industry constantly working towards a goal",
        },
        {
          code: "il",
          title: "Innovation-led",
          text1:
            "Leading change and innovation through creative thinking and bold challenges as the 'First Mover' of future finance",
        },
        {
          code: "th",
          title: "Trust Honesty",
          text1:
            "Honesty and ethics are based on always maintain an attitude of good faith",
        },
        {
          code: "sg",
          title: "Shared Growth",
          text1:
            "Beyond the development of individuals and organizations, growing together and contributing to social development",
        },
      ],
    };
  }

  changeLanguage = (val) => {
    this.props.changeLanguage(val);
  };

  onLanguageClick = (value) => {
    this.setState(
      {
        languageCode: value,
      },
      () => {
        this.changeLanguage(this.state.languageCode);
      }
    );
  };

  componentDidMount() {
    fetch("./visionAndMissionData.json")
      .then((response) => response.json())
      .then((result) => {
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          if (obj.languageCode === this.props.languageCode) {
            this.setState({
              languageCode: obj.languageCode,
              titleCompanyOverview: obj.titleCompanyOverview,
              textCompanyOverview1: obj.textCompanyOverview1,
              textCompanyOverview2: obj.textCompanyOverview2,
              textCompanyOverview3: obj.textCompanyOverview3,
              visionTitle: obj.visionTitle,
              visionText1: obj.visionText1,
              missionTitle: obj.missionTitle,
              missionText1: obj.missionText1,
              titleBusinessDomain: obj.titleBusinessDomain,
              textBusinessDomain1: obj.textBusinessDomain1,
              titleAchievements: obj.titleAchievements,
              titleCoreValues: obj.titleCoreValues,
              cards: obj.cards,
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

  componentDidUpdate(prevProps) {
    fetch("./visionAndMissionData.json")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          if (obj.languageCode === this.props.languageCode) {
            this.setState({
              languageCode: obj.languageCode,
              titleCompanyOverview: obj.titleCompanyOverview,
              textCompanyOverview1: obj.textCompanyOverview1,
              textCompanyOverview2: obj.textCompanyOverview2,
              textCompanyOverview3: obj.textCompanyOverview3,
              visionTitle: obj.visionTitle,
              visionText1: obj.visionText1,
              missionTitle: obj.missionTitle,
              missionText1: obj.missionText1,
              titleBusinessDomain: obj.titleBusinessDomain,
              textBusinessDomain1: obj.textBusinessDomain1,
              titleAchievements: obj.titleAchievements,
              titleCoreValues: obj.titleCoreValues,
              cards: obj.cards,
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
        <div className="target">
          <div style={{ marginTop: 100 }}>
            <div className="companyOverview">
              <div className="my-5">
                <h1 className="text-center">
                  {this.state.titleCompanyOverview}
                </h1>
              </div>

              <div className="container-fluid mb-5 ">
                <div className="row justify-content-center text-center">
                  <div className="col-10 mx-auto">
                    <div className="row gy-4">
                      {this.state.textCompanyOverview1}
                    </div>
                    <br />
                    <div className="row gy-4">
                      {this.state.textCompanyOverview2}
                    </div>
                    <br />
                    <div className="row gy-4">
                      {this.state.textCompanyOverview3}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-mid">
              <div className="logo-spinY">
                <img src="./Pictures/kb-logo-crop.png" className="img-logo-left" />
              </div>
              <div id="visionMision" className="Header">
                <div className="my-5">
                  <h1 className="text-center">{this.state.visionTitle}</h1>
                </div>

                <div className="container-fluid mb-5">
                  <div className="row ">
                    <div className="col-10 mx-auto">
                      <div className="row text-center gy-4">
                        <p className="text-center">{this.state.visionText1}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-5">
                  <h1 className="text-center">{this.state.missionTitle}</h1>
                </div>

                <div className="container-fluid mb-5">
                  <div className="row">
                    <div className="col-10 mx-auto">
                      <div className="row gy-4">
                        <p className="text-center">{this.state.missionText1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="businessDomain" className="Header">
                <div className="my-5">
                  <h1 className="text-center">
                    {this.state.titleBusinessDomain}
                  </h1>
                </div>

                <div className="container-fluid mb-5">
                  <div className="row">
                    <div className="col-10 mx-auto">
                      <div className="row gy-4">
                        <p className="text-center">
                          {this.state.textBusinessDomain1}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="achievements" className="Header">
                <div className="my-5">
                  <h1 className="text-center">
                    {this.state.titleAchievements}
                  </h1>
                </div>

                <div className="container-fluid mb-5">
                  <div className="row">
                    <div className="col-10 mx-auto">
                      <div className="row gy-4">
                        <img
                          src={web}
                          className="img-fluid animated img-achievements"
                          alt="HomeImg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="coreValues" className="Header">
              <div className="my-5">
                <h1 className="text-center">{this.state.titleCoreValues}</h1>
              </div>

              <div className="container-fluid mb-5">
                <div
                  className="row"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos-offset="300"
                >
                  <div className="col-10 mx-auto">
                    <div className="row gy-4">
                      {this.state.cards.map((card) => (
                        <CardNoPicture2
                          key={this.code}
                          title={card.title}
                          text1={card.text1}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default VisionAndMission;
