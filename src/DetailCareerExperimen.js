import {useState, useEffect} from "react";
import React, { Component } from 'react';
import { useParams,useMatch } from "react-router-dom";

export default function DetailCareerExperimen() {
    //const [name,setName] = useState('default name');
    const {id}=useParams();
    console.log(id);
    
    const fetchData = () =>{
        fetch('/careerData.json')
        .then(function(response){
            console.log(response);
            return response.json;
        })
        .then(function(myJson){
            console.log(myJson);
            setData(myJson);
        })
    }

    useEffect(()=>{
        fetchData()
    },[]);
    
    const [data,setData]=useState([]);
    
    return (
        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <div className="card-header">
                <h5 className="card-title">{id}</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">{id}</h5>
              <p className="card-text">{id}</p>
              <p>{data && data.length>0 && data.map((item)=><p>{item.about}</p>)}</p>
            </div>
          </div>
        </div>
    );
    
}
