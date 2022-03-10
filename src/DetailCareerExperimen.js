import {useState, useEffect, useCallback} from "react";
import React, { Component } from 'react';
import { useParams,useMatch } from "react-router-dom";

function DetailCareerExperimen() {
    //const [name,setName] = useState('default name');
    const {id,languageCode}=useParams();
    console.log(id);
    //console.log(languageCode);
    const [data,setData]=useState("");
    const [jobDescriptions,setJobDescriptions]=useState([]);
    const [requirements,setRequirements]=useState([]);
    const [imgPath,setImgPath]=useState("");

  
    useEffect(() => {
      fetch('/careerData.json')
        .then(response=>response.json())
        .then(data => {
          //console.log(data);
          //console.log(`string len is ${data.length}`);
          data.forEach(element => {
            if(element.languageCode===languageCode){
              element.cards.forEach(cardElement=>{
                if(cardElement.code==id){
                  //setData(cardElement);
                  //console.log( `result =${Date.now()}`);
                  console.log(cardElement.imgsrc);
                  //result=cardElement;
                  setData(cardElement.title);
                  setJobDescriptions(cardElement.job_description);
                  setRequirements(cardElement.requirements);
                  setImgPath(cardElement.imgsrc);
                }
              })
            }
          });
        });
    }, [data]);


    return (
        <div>
          <div className="container">
            <h2>
              Occupancy Job for {data}
            </h2>
            <img src={`/${imgPath}`}/>
            <h3>Job Description</h3>
            <ul>
              {jobDescriptions.map((jobDescription =>
              <li key={jobDescriptions.indexOf(jobDescription)}>{jobDescription}</li>
              ))}    
            </ul> 
            <h2>
              Requirements for this job:
            </h2>
            <ul>
            {requirements.map((requirement =>
              <li key={requirements.indexOf(requirement)}>{requirement}</li>
            ))} 
            </ul>
          </div>                  
        </div>
//        <div className="col-md-4 col-10 mx-auto">
//          <div className="card">
//            <div className="card-header">
//                <h5 className="card-title">{ `sementara ${Date.now()}`}</h5>
//            </div>
//            <div className="card-body">
//              <h5 className="card-title">{data}</h5>
//              <p className="card-text">{id}</p>
//            </div>
//          </div>
//        </div>
    );
    
}
export default DetailCareerExperimen;
