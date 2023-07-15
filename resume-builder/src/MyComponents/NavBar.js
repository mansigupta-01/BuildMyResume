import React, {useState} from 'react';
import './NavBar.css';
import { MenuItems } from "./MenuItems";


function NavBar(){
    const [clicked,setClicked]=useState(false);
    

    
    return(
        <nav className='main-nav'>    
            <h1 className="logo">CreateMyResume</h1>
               <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                   <i className={ clicked ? "fa-solid fa-rectangle-xmark " : "fa-solid fa-bars" }></i></div>
                
               <ul className={clicked? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                       return (
                        <li key={index}>
                            <div className={item.cName} onClick={item.url}>
                            {item.title}
                            </div>
                        </li>
                       ) 
                   })}
               </ul>  
               <button className="btn" >Sign Up</button> 
               <button className="btn">Sign In</button>
               </nav>
               )
  
}

export default NavBar;
