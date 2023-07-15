import React, { useState, useEffect } from "react";
import './Resume1.css';

function Resume1(props) {
  const information=props.information;
  const sections=props.sections;

  const [column, setColumn] = useState([[], []]);

  const info ={
    workExp: information[sections.workExp],
  };

  const getFormattedDate = (value)=>{
    if(!value)
      return "";
    const date= new Date(value);

    return `${date.getDate()}/${
      date.getMonth() + 1>9? date.getMonth() + 1:"0" + date.getMonth() + 1}/${date.getFullYear()}`
  };
  
  const workExpSection = (
    <div key={"workexp"} className="section workExp">
      <div className="sectionTitle">Work Experience</div>
      <div className="content">
        <div className="item">
          <p className="title">Full Stack Developer</p>
          <p subTitle>Company Name</p>
          <div className="date">
          <i class="fa-solid fa-calendar-days"/>
            12/07/2021- 2/02/2022
          </div>
          <a className="link">https://de.com/edwed/dc/dcer</a>
          <p className="overview">Remote</p>
          <ul className="points">
            <li className="point">it is a point</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const projectSection = (
    <div key={"project"} className="section project">
      <div className="sectionTitle">Project</div>
      <div className="content">
        <div className="item">
          <p className="title">Project title</p>
          <a className="link">https://deployedlink</a>
          <a className="link">https://github.com</a>
          <p className="overview">This is a dummy project.</p>
          <ul className="points">
            <li className="point">it is a point</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const educationSection = (
    <div key={"education"} className="section education">
      <div className="sectionTitle">Education</div>
      <div className="content">
        <div className="item">
          <p className="title">Institution Name</p>
          <p className="subTitle">Branch</p>
          <div className="date">
          12/07/2021- 2/02/2022
          </div>
          <p className="overview">Marks Obtained</p>
        </div>
      </div>
    </div>
  );

  const achievementSection = (
    <div key={"achievement"} className="section achievement">
      <div className="sectionTitle">Achievements</div>
      <div className="numbered">
      <li>Achievement 1</li>
      <li>Achievement 2</li>
      </div>
    </div>
  );

  const skillSection = (
    <div key={"skill"} className="section skill">
      <div className="sectionTitle">Skills</div>
      <div className="content">
        <div className="item">
        <ul className="points">
            <li className="point">skill 1</li>
            <li className="point">skill 2</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const langSection = (
    <div key={"lang"} className="section lang">
      <div className="sectionTitle">Languages Known</div>
      <div className="content">
        <div className="item">
        <ul className="points">
            <li className="point">Language 1</li>
            <li className="point">Language 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const certificateSection = (
    <div key={"certificate"} className="section certificate">
      <div className="sectionTitle">Certificates</div>
      <div className="content">
        <div className="item">
        <p className="overview">Description of project.</p>
        <a className="link">https://deployedlink</a>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    setColumn([
      [
        skillSection,
        langSection,
        achievementSection,
        certificateSection,
      ], [
        educationSection,
        workExpSection,
        projectSection,
       
      ]
    ])
  });

  return (
    <div className="container1">
      <div className="main1">
        <div className="col1">
          <div className="links1">
            <a className="link">
              <i class="fa-solid fa-envelope" /> Email@gmail.com</a>
            <a className="link">
              <i class="fa-solid fa-location-dot" /> New Delhi, India</a>
            <a className="link">
              <i class="fa-solid fa-phone"></i> +91-1234567890</a>
            <a className="link">
              <i class="fa-brands fa-linkedin" /> https://linkedin.in</a>
            <a className="link">
              <i class="fa-brands fa-github" /> https://github.in</a>
          </div>

          {column[0]}
        </div>

        <div className="col2">
          <div className="header1">
            <div className="heading1">
              FirstName LastName
            </div>
            <div className="subHeading1">Software Developer</div>
          </div>
          {column[1]}
        </div>
      </div>

    </div>
  );
}

export default Resume1;
