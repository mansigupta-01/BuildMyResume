import React, { forwardRef, useRef, useState, useEffect } from "react";
import User_Template1 from '../asset/User_Template1.png';
import './Template2.css';

const Template2 = forwardRef((props,ref) => {
  const information=props.information;
  const sections=props.sections;

  const [column, setColumn] = useState([[], []]);

  const info ={
    basicInfo: information[sections.basicInfo],
    workExp: information[sections.workExp],
    project: information[sections.project],
    education: information[sections.education],
    skills: information[sections.skills],
    lang: information[sections.lang],
    certificate: information[sections.certificate],
    achievements: information[sections.achievements],
  };

  const getFormattedDate = (value)=>{
    if(!value)
      return "";
    const date= new Date(value);

    return `${date.getDate()}/${
      (date.getMonth() + 1)>9? (date.getMonth() + 1):"0" + (date.getMonth()+1)}/${date.getFullYear()}`
  };

  const sectionDiv={
    [sections.workExp]:
    <div key={"workexp"} className={`${"section workExp"} $(info.workExp?.sectionTitle ? "": "hidden")`}>

    <div className="sectionTitle">{info.workExp?.sectionTitle}</div>
    <div className="content">
      {info.workExp?.details?.map((item) => (
      <div className="item" key={item.title}>
      {
        item.title &&
        <p className="title">{item.title}</p>
      }
      {
        item.companyName &&
        <p className="subTitle2">{item.companyName}</p>
      }
      {
        item.certificate &&
        <a className="link2" href={item.certificate}>
          <i class="fa-solid fa-paperclip"></i>{item.certificate}</a>
      }
      {
        item.startDate && item.endDate ?(
        <div className="date">
          <i class="fa-solid fa-calendar-days"></i>
        {getFormattedDate(item.startDate)}-{getFormattedDate(item.endDate)}
      </div>
        ):""
      }
      {
        item.location &&
        <p className="date">
          <i class="fa-solid fa-location-dot"></i>{item.location}</p>
      }
      {
        item.points?.length > 0 && (
        <ul className="points">
          {item.points?.map((elem,index) => (
               <li className="point" key={elem + index}>{elem}</li>
          ))}
      </ul>
        )}
      </div>
        ))}
    </div>
  </div>,

    [sections.project]:
    <div key={"project"} className={`${"section project"} $(info.project?.sectionTitle ? "": "hidden")`}>
      <div className="sectionTitle">{info.project?.sectionTitle}</div>
      <div className="content">
      {info.project?.details?.map((item) => (
        <div className="item" key={item.title}>
      {
        item.title &&
        <p className="title">{item.title}</p>
      }
      {
        item.overview &&
        <p className="overview">{item.overview}</p>
      }
          {
        item.link2 &&
        <a className="link2" href={item.link2}>
          <i class="fa-solid fa-paperclip"></i>{item.link2}</a>
      }
           {
              item.github &&     
            <a className="link2" href={item.github}>
            <i class="fa-brands fa-github" />  {item.github} </a>
            }
          {
        item.points?.length > 0 && (
        <ul className="points">
          {item.points?.map((elem,index) => (
               <li className="point" key={elem + index}>{elem}</li>
          ))}
      </ul>
        )}
        </div>
      ))}
      </div>
    </div>,

    [sections.education]:
    <div key={"education"} className={`${"section education"} $(info.education?.sectionTitle ? "": "hidden")`}>
    <div className="sectionTitle">{info.education?.sectionTitle}</div>
    <div className="content">
      {info.education?.details?.map((item) => (
      <div className="item">
      {
        item.college &&
        <p className="title">{item.college}</p>
      }
         {
        item.classCollege &&
        <p className="subTitle2">{item.classCollege}</p>
      }
        {
        item.startDate && item.endDate ?(
        <div className="date">
          <i class="fa-solid fa-calendar-days"></i>
        {getFormattedDate(item.startDate)}-{getFormattedDate(item.endDate)}
      </div>
        ):""
      } 
      {
        item.marks &&
        <p className="overview">{item.marks}</p>
      }
      </div>
      ))}
    </div>
  </div>,

    [sections.skills]:
    <div key={"skill"} className={`${"section skill"} $(info.skills?.sectionTitle ? "": "hidden")`}>
    <div className="sectionTitle">{info.skills?.sectionTitle}</div>
    <div className="content">
      {info.skills?.details?.map((item) => (
      <div className="item">
       {
          item.skill && 
        <ul className="point">
          <li className="point1">{item.skill}</li>
        </ul>
        }
      </div>
      ))}
    </div>
  </div>,

    [sections.lang]:
    <div key={"lang"} className={`${"section lang"} $(info.lang?.sectionTitle ? "": "hidden")`}>
    <div className="sectionTitle">{info.lang?.sectionTitle}</div>
    <div className="content">
    {info.lang?.details?.map((item) => (
      <div className="item">
        {
          item.language && 
        <ul className="points">
          <li className="point">{item.language}</li>
        </ul>
        }
      </div>
    ))}
    </div>
  </div>,

    [sections.certificate]:
    <div key={"certificate"} className={`${"section certificate"} $(info.certificate?.sectionTitle ? "": "hidden")`}>
    <div className="sectionTitle">{info.certificate?.sectionTitle}</div>
    <div className="content">
    {info.certificate?.details?.map((item) => (
      <div className="item">
       {
        item.description &&
        <p className="overview">{item.description}</p>
      }
      {
        item.certificatelink2 &&
        <a className="link2" href={item.certificatelink2}>
          <i class="fa-solid fa-paperclip"></i>{item.certificatelink2}</a>
      }
      </div>
    ))}
    </div>
  </div>,

    [sections.achievements]:
    <div key={"achievements"} className={`${"section achievements"} $(info.achievements?.sectionTitle ? "": "hidden")`}>
    <div className="sectionTitle">{info.achievements?.sectionTitle}</div>
    <div className="content">
    {info.achievements?.points?.length > 0 && (
    <ul className="numbered">
      {info.achievements?.points?.map((elem, index) => (
    <li className="point" key={elem+index}>{elem}</li>
      ))}
    </ul>
    )}
    </div>
  </div>
  };
  
  useEffect(() => {
    setColumn([
      [
        sections.education,
        sections.skills,
        sections.lang,
        
      ], [
        
        sections.workExp,
        sections.project,
        sections.certificate,
        sections.achievements,
        
      
      ]
    ])
  });

  return (
    <div ref={ref}>
    <div  className="container22">
      <div className="main1">
        <div className="col11">
          {/* <img src={User_Template1} alt="user" className="temp1_img" id="imgTemplate"/>   */}
          

          {column[0].map((item) =>sectionDiv[item])}
        </div>

        <div className="col22 temp2">
          <div className="header1">
            {
               info.basicInfo?.detail?.fname && info.basicInfo?.detail?.lname ? (
                <div className="heading1">
               {info.basicInfo?.detail?.fname} {info.basicInfo?.detail?.lname}  
                </div> ): ""
            }
            
            {
              info.basicInfo?.detail?.title && 
              <div className="subHeading11">{info.basicInfo?.detail?.title}</div>
            }
            
          </div>
          <div className="links2">
            {
             info.basicInfo?.detail?.email && 
                <a className="link2" type="email">
                  <i class="fa-solid fa-envelope" />
                   {info.basicInfo?.detail?.email}</a> 
            }
            {
               info.basicInfo?.detail?.address && 
              <p className="link2">
              <i class="fa-solid fa-location-dot" />  {info.basicInfo?.detail?.address} </p>
            }
            {
               info.basicInfo?.detail?.phone && 
               <p className="link2" type="tel" >
               <i class="fa-solid fa-phone"></i>  {info.basicInfo?.detail?.phone}</p>
            }
            {
               info.basicInfo?.detail?.linkedin && 
              <a className="link2">
              <i class="fa-brands fa-linkedin" />  {info.basicInfo?.detail?.linkedin} </a>
            }
            {
              info.basicInfo?.detail?.github &&     
            <a className="link2">
            <i class="fa-brands fa-github" />  {info.basicInfo?.detail?.github}</a>
            }
          </div>
          {column[1].map((item) =>sectionDiv[item])}
        </div>
      </div>

    </div>
    </div>
  );
});

export default Template2;