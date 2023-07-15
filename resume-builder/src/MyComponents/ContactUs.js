import React  from 'react';
import './ContactUs.css';
import Newnavbar from './Newnavbar';
import Footer from './Footer'
import contactus_img from '../asset/contact-banner.jpg';
import axios from "axios"
import Contact1 from './Contact1';
import { useNavigate } from "react-router-dom"

function ContactUs(){
    let navigate = useNavigate();
  return( 
    // const element = (<div> </div>)
    <div>
      
      <center>
      <img src={contactus_img} className='img_contact' alt="contact us" /></center>
      
  <div className="center">
      
        <center>  
        <h1 className="App-title" style={{ color: "#001D6E" }}>CONTACT US</h1>
        </center>

      <center>
        <p style={{ color: "#632626" }}>
          Proudly made in India!!!
         Make my resume is best way to create your resume online. If you have ever tried creating your resume with word editors, you know how painful it is to design an even simple resume. We are here to solve exactly that.
        </p>
      </center>

      <center>
        <p>
          For any Query you can drop us an  email at 
        </p>
      </center>

      <center>
        <p>
          buildmyresume1001@gmail.com
        </p>
      </center>
     </div>
  
  
    <Contact1 />
    </div>
    )
  
}

export default ContactUs;