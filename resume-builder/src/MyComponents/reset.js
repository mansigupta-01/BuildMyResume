import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import logo from "../asset/logo.png";

const Reset = ( { setLoginUser } ) => {

    let navigate = useNavigate();

    const [user,setUser] = useState({        
        email:"",
    })

    const handleChange = e => {        
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    // const login =(event) => {
    //     event.preventDefault()
    //     const {email, password} = user
    //     const response=  fetch('http://localhost:9002/logon', {
    //         method: 'Post',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // "Authorization":"Bearer "+localStorage.getItem("jwt")
    //         },
    //         body: JSON.stringify({
    //             email, password
    //         }),
    // })

    // const data=response.json()

    // if(data.user){
    //     alert(response.data.message)
    //     setLoginUser(response.data.user)
    //             navigate("/")
    // }
    // else {
    //             alert("Fill all the fields to login.")
    //         }
    const reset = () =>{
        const {email} = user
        if(  email ){
            axios.post("http://localhost:9002/reset-password", user)
            .then(res => {
                alert(res.data.message)
               setLoginUser(res.data.user)
                navigate("/login")
            })
        } else {
            alert("Enter email to reset password.")
        }
     }

    return (
        <div className="login">
             <img className="logo1" src={logo} alt="logo"/>
            <h1>Reset Password</h1>
            <label>Email</label>
            <input type ="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            
            <div className="button" onClick={reset}>reset password</div>
            <div>or</div>
            <div className="button" onClick={ () => navigate("/register")}>Register</div>
        </div>
    )
}

export default Reset