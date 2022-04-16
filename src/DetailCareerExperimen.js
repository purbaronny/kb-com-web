import { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import "./DetailCareerExperiment.css";
import { useParams, useMatch } from "react-router-dom";
import Footer from "./Footer";
import { HashLink as Link } from "react-router-hash-link"


function DetailCareerExperimen(props) {
  const [languageCode, setLanguageCode] = useState("");
  console.log(props.languageCode);
  //const [name,setName] = useState('default name');\

  const { id } = useParams();
  //console.log(id);
  //console.log(languageCode);
  const [data, setData] = useState("");
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [imgPath, setImgPath] = useState("");
  const [headerDetail, setHeaderDetail] = useState("");
  const [jobDescriptionsHeader, setjobDescriptionsHeader] = useState("");
  const [requirementHeader, setrequirementHeader] = useState("");
  const [Apply, setApply] = useState("");
  if (props.languageCode !== languageCode) {
    setLanguageCode(props.languageCode);
  }
  useEffect(() => {

    fetch("/careerData.json")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        //console.log(`string len is ${data.length}`);

        data.forEach((element) => {
          if (element.languageCode === languageCode) {
            setHeaderDetail(element.header);
            setjobDescriptionsHeader(element.jobDescriptionsHeader);
            setrequirementHeader(element.RequirementHeader);
            setApply(element.Apply)
            element.cards.forEach((cardElement) => {
              if (cardElement.code == id) {
                //setData(cardElement);
                //console.log( `result =${Date.now()}`);
                //console.log(cardElement.imgsrc);
                //result=cardElement;
                //console
                console.log(cardElement.languageCode);
                setData(cardElement.title);
                setJobDescriptions(cardElement.job_description);
                setRequirements(cardElement.requirements);
                setImgPath(cardElement.imgsrc);
              }
            });
          }
        });
      });
  }, [data, languageCode]);

  return (
    <div className="root-detail">
      <div className="container-detail ">
        <div className="row-detail">
          <h2 className="orange-text">{headerDetail} {data}</h2>
          <img className="img-top-80" src={`/${imgPath}`} />
          <div className="main-content">
            <h3 className="orange-text">{jobDescriptionsHeader}</h3>
            <ul className="list-group">
              {jobDescriptions.map((jobDescription) => (
                <li className="list-item" key={jobDescriptions.indexOf(jobDescription)}>
                  {jobDescription}
                </li>
              ))}
            </ul>

            <h3 className="orange-text mt-3">{requirementHeader}</h3>
            <ul className="list-group">
              {requirements.map((requirement) => (
                <li className="list-item" key={requirements.indexOf(requirement)}>{requirement}</li>
              ))}
            </ul>


          </div>
          <div className="row mt-5">
            <Link className="btn btn-warning" to="/contactUs#contact">{Apply}</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default DetailCareerExperimen;
