import React from 'react';
import Typical from 'react-typical';
import './Header.css';
import ChooseTemplate from './ChooseTemplate';
import axios from "axios"
import { useNavigate ,useLocation} from "react-router-dom"
import Faq from './Faq';
import ResumeExamplesHome from './ResumeExamplesHome';


export default function Header(){

    let navigate = useNavigate();
    let location = useLocation();
    return (
        <div div className='full'>
        <div className='resume-container'>
            <div className='resume-parent'>
                <div className='resume-details'>
                    {/* <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.facebook.com/?msclkid=8d231b88af4b11ec970c27489b34251b'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/?msclkid=aebff53caf4b11ecba9115c477df10cb'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://twitter.com/'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        <a href='https://www.linkedin.com/feed/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                    </div>
                    </div> */}
                 
                <div className='resume-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Welcome to<span className='highlighted-text'> Build My Resume</span>
                    </span>
                </div>

               
                <div className='resume-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}  
                             <Typical
                            loop={Infinity}
                            steps={[
                                "Create a professional looking resume for free.",
                                1000,
                                "Our Resume Builder is easy to use.",
                                1000,
                                "Build your resume in few minutes.",
                                1000,
                                // "Cross Platform v",
                                // 1000,
                                // "React/React Native Dev",
                                // 1000,.
                            ]}
                            /> 
                                
                            
                        </h1>
                        <span className='resume-role-tagline'>
                            Build professional looking resume for free.
                        </span>
                    </span>
                </div>
                <div className='resume-options'>
                    <button className='btn primary-btn' onClick={ () => navigate("/choosetemplate")}>
                        {""}
                        Create Resume{" "}
                    </button>
                    
                </div>
                </div>
                <div className='resume-picture'>
                    <div className='resume-picture-background'>

                    </div>
                </div>
            </div>
            
      
         </div>
         <ChooseTemplate />
         <ResumeExamplesHome />
         <Faq />
         </div>
         
         
    )
}