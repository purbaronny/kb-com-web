import {useState, useEffect} from "react";
import React, { Component } from 'react';
import { useParams,useMatch } from "react-router-dom";

export default function DetailCareerExperimen() {
    //const [name,setName] = useState('default name');
    const {id}=useParams();
    console.log(id);
    
    const fetchData = () =>{
        fetch('/careerData.json')
        .then(response=>response.json())
        .then(data=>console.log(data));
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
              <h5 className="card-title">{data}</h5>
              <p className="card-text">{id}</p>

            </div>
          </div>
        </div>
    );
    
}
