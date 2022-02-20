import React, { Component } from "react";

class VisionAndMission extends Component {

    state = {
        languageCode: "en-US",
        visionTitle: "Vision",
        visionText1: "To be a trusted world class digital mobile lifestyle provider and solution",
        missionTitle: "Mission",
        missionText1: "Delivering mobile digital services and solutions that exceed users' expectations",
        missionText2: "Creating more value for shareholders",
        missionText3: "Support the nation's economic growth"
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
        
      }
    
      componentDidUpdate(prevProps) {
        fetch("./visionAndMissionData.json")
          .then(response => response.json())
          .then(result => {        
            for (var i = 0; i < result.length; i++) {
              var obj = result[i];
              if(obj.languageCode == this.props.languageCode) {
                this.setState({
                  languageCode: obj.languageCode,
                  visionTitle: obj.visionTitle,
                  visionText1: obj.visionText1,
                  missionTitle: obj.missionTitle,
                  missionText1: obj.missionText1,
                  missionText2: obj.missionText2,
                  missionText3: obj.missionText3,
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
                <div className="my-5">
                    <h1 className="text-center">{this.state.visionTitle}</h1>
                </div>

                <div className="container-fluid mb-5">
                    <ul>{this.state.visionText1}</ul>
                </div>

                <div className="my-5">
                    <h1 className="text-center">{this.state.missionTitle}</h1>
                </div>

                <div className="container-fluid mb-5">
                    <ul>{this.state.missionText1}</ul>
                    <ul>{this.state.missionText2}</ul>
                    <ul>{this.state.missionText3}</ul>
                </div>
            </>
        );
    }
}

export default VisionAndMission;