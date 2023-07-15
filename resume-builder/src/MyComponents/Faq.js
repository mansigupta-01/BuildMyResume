import React,{useState} from 'react';

import './Faq.css';
export default function Faq(){

  const [selected,setSelected]= useState(false);

  const toggle =(i) =>{
  if(selected===i)
  {
    return setSelected(null);
  }
  setSelected(i);
  };

  const data=[
  {
    question: 'What is a Resume?',
    answer:'A resume is a brief summary of personal and professional experiences, skills, and education history. Its main purpose is to show off your best self to potential employers.',
  },
  {
    question: 'What to Put on a Resume?',
    answer:'The most common sections on a resume are: Contact information, Resume summary or objective, Work experience, Education',
  },
  {
    question: 'How Long Should a Resume Be?',
    answer:'One page. If you have a lot of work experience (10 years +), sometimes it makes sense to make it 2 pages MAX if everything you mention is super relevant for the position you’re applying for.',
  },
  {
    question: 'What is the Best Resume Template?',
    answer:'There’s no such thing as “the best resume template” - every recruiter/employer has their own personal preference. Our general recommendation is to do your research on the company and what its values are. For example, if you’re applying for a position at a bank, you’d want a more professional resume template. On the other hand, if you want a job in a startup where they value innovation more, you should stick to creative simple resume.',
  },
  {
    question: 'Are These Resume Templates Free?',
    answer:'Yep, all of the templates listed above are free resume templates.',
  },
  {
    question: 'What If I Am a Student?',
    answer:'All of our resume samples are student-friendly!',
  },
  {
    question: 'Do You Offer One-Page Resume Templates?',
    answer:'Yep. All the templates you see above are one-page resume templates.',
  },
  {
    question: 'How do I log in?',
    answer:'By logging in via the top right corner on the website, you will get access to your account.',
  },
]
  return(

<div class="FAQ_list_container">
        <div class=" abcd">Frequently Asked Questions </div>
        <div class="FAQ__heading ">
        {
          data.map((item,i) => {
            return(
            <div className='FAQ__list'>
              <div className='FAQ__title' onClick={() => toggle(i)} key={i}>
                 {item.question}
                <span>{selected === i ?  <i class="fa-solid fa-minus"/> :  <i class="fal fa-plus"></i>}</span> 
              </div>
              <div className={selected === i ? ' show': 'FAQ__visible'}>                
                {item.answer}
              </div>
            </div>

          );
        })}
        </div>
</div>
  )
}