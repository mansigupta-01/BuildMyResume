import './App.css';
import Newnavbar from './MyComponents/Newnavbar'
import NavBar from './MyComponents/NavBar';
import AboutUs from './MyComponents/AboutUs';
import Header from './MyComponents/Header';
import CreateResume from './MyComponents/CreateResume';
import Faq from './MyComponents/Faq';
import Footer from './MyComponents/Footer';
import Login from './MyComponents/login';
import Register from './MyComponents/register';
import Reset from './MyComponents/reset';
import ChooseTemplate from './MyComponents/ChooseTemplate';
import ContactUs from './MyComponents/ContactUs';
import ResumeExamplesHome from './MyComponents/ResumeExamplesHome';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import {useState} from 'react';
import Template1 from './MyComponents/Template1';

function App() {
  const [user, setLoginUser] = useState({
   
  })

  return ( 
    <div className='page-container'>
      <div className='content-wrap'>     
      <Newnavbar /> 
      <Router>
        <Routes>
          <Route path="/" element=
          { 
            user && user._id ? <Header /> : <Login setLoginUser={setLoginUser} />
          }
          />
          <Route path="/login" element=
          {
          <Login setLoginUser={setLoginUser} />
          }
           />
           <Route path="/reset" element={<Reset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/header" element={<Header />} />
          <Route path="/choosetemplate" element={<ChooseTemplate />} />
          <Route path="/createresume" element={<CreateResume />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/resumeexamples" element={<ResumeExamplesHome />} />
          

        </Routes>
      </Router> 
      </div>
      <Footer />
    
      
     
   </div>
  );
}

export default App;