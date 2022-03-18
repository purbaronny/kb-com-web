import { useState, useEffect, useCallback } from "react";
import React, { Component } from "react";
import "./DetailCareerExperiment.css";
import { useParams, useMatch } from "react-router-dom";
import Footer from "./Footer";
function DetailCareerExperimen() {
  //const [name,setName] = useState('default name');
  const { id, languageCode } = useParams();
  console.log(id);
  //console.log(languageCode);
  const [data, setData] = useState("");
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [imgPath, setImgPath] = useState("");

  useEffect(() => {
    fetch("/careerData.json")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        //console.log(`string len is ${data.length}`);
        data.forEach((element) => {
          if (element.languageCode === languageCode) {
            element.cards.forEach((cardElement) => {
              if (cardElement.code == id) {
                //setData(cardElement);
                //console.log( `result =${Date.now()}`);
                console.log(cardElement.imgsrc);
                //result=cardElement;
                setData(cardElement.title);
                setJobDescriptions(cardElement.job_description);
                setRequirements(cardElement.requirements);
                setImgPath(cardElement.imgsrc);
              }
            });
          }
        });
      });
  }, [data]);

  return (
    <div className="root-detail">
      <div className="container-detail ">
        <div className="row-detail">
          <h2 className="orange-text">Occupancy Job for {data}</h2>
          <img className="img-top-80" src={`/${imgPath}`} />
          <div className="main-content">
            <h3 className="orange-text">Job Description</h3>
            <ul className="list-group">
              {jobDescriptions.map((jobDescription) => (
                <li className="list-item" key={jobDescriptions.indexOf(jobDescription)}>
                  {jobDescription}
                </li>
              ))}
            </ul>

            <h3 className="orange-text">Requirements for this job :</h3>
            <ul className="list-group">
              {requirements.map((requirement) => (
                <li className="list-item" key={requirements.indexOf(requirement)}>{requirement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default DetailCareerExperimen;
