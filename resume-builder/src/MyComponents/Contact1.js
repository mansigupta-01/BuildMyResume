import React, { useRef } from 'react';
import './Contact1.css';
import emailjs from '@emailjs/browser';
import InputControl from './InputControl';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uungtzd', 'template_5vmjnuk', form.current, 'm_6K601A2C0BXHg6q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <center>
            <div className="container border"
                style={{
                    margin: "50px",
                    width: "40%",
                    height: "30%",
                    backgroundImage: `url('https://media.istockphoto.com/photos/web-contact-us-icons-on-blue-background-contact-us-cutomer-support-picture-id1338907882?b=1&k=20&m=1338907882&s=170667a&w=0&h=p_43GQzYXk9GWkK-TiiNNPSnFgIOAF6B8k0BTKQgs7g=')`,
                    backgroundPosition: 'center',
                    backgroundSize: "cover"
                }}>
        
          
                    <h1 style={{ marginTop: '35px', color: "#874356"  }} className="body" > CONTACT US </h1>
       
    
                    <center>
    <form ref={form} className="flex" onSubmit={sendEmail} >
   
    {/* <InputControl
                   label="Name"
                   type="text"
                   name="user_name"
            />
            <InputControl
                   label="Email"
                   type="text"
                   name="user_email"
            />
            <InputControl
                   label="Message"
                   type="textarea"
                   name="message"
            /> */}
            
      <label className='label'>Name</label>
      <input type="text" name="user_name" className='input'/>
      


      <label className='label'>Email</label>
      <input type="email" name="user_email" className='input'/>
      

    
      <label className='label'>Message</label>
      <textarea name="message" rows='5' cols='40' className='input' />
     <center>
      <input type="submit" value="Send"  className="Send" align="bottom" />
      </center> 
    </form>
    </center>
    </div>
 </center>
  );
};

export default ContactUs;