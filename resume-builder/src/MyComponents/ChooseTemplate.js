import React from 'react';
// import {Card, Row, Col} from 'react-bootstrap';
import './ChooseTemplate.css';
import img2 from '../asset/image1.jpeg';
import img1 from '../asset/image2.jpeg';
import img3 from '../asset/image3.png';
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ChooseTemplate(){
    return(
      <div className='contain'>
<div className='heading7' style={{color:"#1572A1"}}>
  Choose Template
</div>
      <div className='wrapper'>
        <Card
              src={img2}
              c_id="temp1"
              alt= "template1"
              title="Classic"
              description="Template 1"/> 
        <Card
              src={img1}
              c_id="temp2"
              alt= "template2"
              title="Professional"
              description="Template 2"/>
        <Card
              src={img3}
              c_id="temp3"
              alt= "template3"
              title="Modern"
              description="Template 3"/>
      </div>
      </div>
    )
}

function Card(props){
  
  const navigate = useNavigate();
  
  const toresume = ()=>{
    navigate("/createresume",{ state: {cid: props.c_id}});
  }

  return(
    <div className='card'>
      <div className='card_body'>
        <img src={props.src} alt={props.alt} className="card_img"/>
        <h2 className='title'>{props.title}</h2>
        <p className='description'>{props.description}</p>
      </div>
      <button className='btn' onClick={ () => {toresume()}}>Generate Resume</button>
    </div>
  )
}

export default ChooseTemplate;