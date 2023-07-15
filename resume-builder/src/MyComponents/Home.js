import React from 'react'
import Header from './Header/Header'
import Faq from './Faq/Faq'
import "./Home.css";

export default function Home() {
    return(
        <div className='home-container'>
            <Header />
            <Faq />
            
        </div>
    )
}