import React from 'react';
import './AboutUs.css';
import contactus_img from '../asset/contact-banner.jpg';
// import img1 from '../asset/about.png';
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AboutUs() {
  let navigate = useNavigate();

  return (
    // const element = (<div> </div>)

    <div className="comptext">


      <img src={contactus_img} className='img_contact' alt="contact us" />

      <div className='text'>
        <center>
          <h1 className='font-link' style={{ color: "#001D6E" }}>About Us</h1>
        </center>
        <br></br>
        <center>
          <h3 className='font-link1' style={{ color: "#85586F" }}>A better way to build your resume</h3>
          <br></br>
          <p className='font-link2' style={{ color: "#22577E" }} >
            Let's face it: writing a resume isn't fun. It takes hours to put your text into a table layout in Word and every page break, re-formatting or layout change is just plain frustrating. That's why we created our resume builder: not only does it help you with inputting your text in a cohesive and readable way, it also makes it really easy to wrap your resume into an eye-popping and professional design. Basically
            like you hired a designer but without the price tag.

            Speaking of price tag - our product is actually free to use. And on top of that we don't sell your data nor
            will we ever do so. Simply because that's not something we would want as users ourselves.
          </p>
        </center>
        <br></br>


        <center>
          <h3 style={{ color: "#46244C" }}>
            We hope that we helped you to save your time and that you have as much fun using it as we had building it! 😊
          </h3>
        </center>

      </div>

    </div>)

}
export default AboutUs;