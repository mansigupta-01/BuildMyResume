import React from 'react';
import './Footer.css';



function Footer() {
  


    return (
      

      <div className="main-footer">
        

        <div className="con">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h2>BuildMyResume</h2>
              <h5 className="list-unstyled">
                
                <li>Create a professional looking resume in just few minutes.</li>
                <li>It is completely free.</li>
              </h5>
            </div>
            {/* Column2 */}
            <div className="col">
              <h5><a class="nav-link active footer-link" aria-current="page" href="http://localhost:3000/header">Home</a></h5>
              <ui className="list-unstyled">
                {/* <li><a class="nav-link footer-link" href="http://localhost:3000/createresume">Create Resume</a></li> */}
                <li><a class="nav-link footer-link" href="http://localhost:3000/choosetemplate">Choose Template</a></li>
                <li><a class="nav-link footer-link" href="http://localhost:3000/resumeexamples">Resume Examples</a></li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col">
              <h5><a class="nav-link footer-link" href="http://localhost:3000/contactus">Contact Us</a></h5>
              <ui className="list-unstyled">
                <li>
                <a class="nav-link footer-link" href="http://localhost:3000/aboutus">About Us</a>
                </li>
                <li><a class="nav-link footer-link" href="http://localhost:3000/faq">FAQ</a></li>
                <li><a class="nav-link footer-link" href="http://localhost:3000/contactus">Feedback</a></li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} BuildMyResume | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Footer;