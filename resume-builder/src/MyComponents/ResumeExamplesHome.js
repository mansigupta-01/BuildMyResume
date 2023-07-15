import React from 'react';
import temp1 from '../asset/temp1.png';
import resumepic from '../asset/resumepic.jpeg';
import temp3 from '../asset/temp3.png';
import example1 from '../asset/example1.png'
import example2 from '../asset/example2.png'
import example3 from '../asset/example3.png'
import './ResumeExamplesHome.css';

const ResumeExamplesHome = () => {
    return (
      <React.Fragment>
  
    <div class="examples-heading" style={{color:"#865858"}}>Resume Examples</div>
    <p class="examples-text" style={{color:"#276678"}}>Use professionally written and formatted resume samples that will get you the job you want.</p>
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
   
  <div className="carousel-inner">   
  
    <div className="carousel-item active">
      <img src={ example3} className="d-block" alt='...'/>
    </div>
    
    

      <div className="carousel-item ">
      <img src={ resumepic} className="d-block " alt='...'/>
    </div>
    
    <div className="carousel-item ">
      <img src={ temp3} className="d-block " alt='...'/>
    </div>

    <div className="carousel-item ">
      <img src={ example2} className="d-block " alt='...'/>
    </div>

    <div className="carousel-item ">
      <img src={ example1} className="d-block " alt='...'/>
    </div>
   
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  </React.Fragment>
    );
}
export default ResumeExamplesHome