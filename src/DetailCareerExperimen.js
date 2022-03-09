import {useState, useEffect, useCallback} from "react";
import React, { Component } from 'react';
import { useParams,useMatch } from "react-router-dom";

function DetailCareerExperimen() {
    //const [name,setName] = useState('default name');
    const {id,languageCode}=useParams();
    console.log(id);
    //console.log(languageCode);
    const [data,setData]=useState([]);
    let result={};
    
    
    const fetchData = () =>{
        fetch('/careerData.json')
        .then(response=>response.json())
        .then(data => {
          console.log(data);
          console.log(`string len is ${data.length}`);
          data.forEach(element => {
            if(element.languageCode===languageCode){
              element.cards.forEach(cardElement=>{
                if(cardElement.code==id){
                  //setData(cardElement);
                  console.log( `result =${Date.now()}`);
                  console.log(cardElement);
                  result=cardElement;
                }
              })
            }
          });
      });
    }
    useEffect(() => {
      fetchData();
    }, [])
    return (

        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <div className="card-header">
                <h5 className="card-title">{ `sementara ${Date.now()}`}</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">{data}</h5>
              <p className="card-text">{id}</p>
            </div>
          </div>
        </div>
    );
    
}
export default DetailCareerExperimen;
