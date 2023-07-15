import React, { useState } from "react"
import "./register.css"
import validator from 'validator'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import logo from "../asset/logo.png";
import InputControl from './InputControl';
import M from 'materialize-css'

const Register = () => {

    const navigate = useNavigate();

    const [user,setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {        
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

//     const emailValidation = () => {
//         const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
//         if (regEx.test(email)) {
//           setMessage("Email is Valid");
//         } else if (!regEx.test(email) && email !== "") {
//           setMessage("Email is Not Valid");
//         } else {
//           setMessage("");
//         }
//       };
    
//     const [emailError, setEmailError] = useState('')
//     const validateEmail = (e) => {
//       var email = e.target.value
    
//       if (validator.isEmail(email)) {
//         setEmailError('Valid Email :)')
//       } else {
//         setEmailError('Enter valid Email!')
//       }
//   }

    // var isNameEmpty=false;
    const register = () =>{
        const { name, email, password, reEnterPassword } = user
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        const passregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
        if (!regEx.test(email)) {
            // M.toast({html: 'Email is InValid'})
           alert("Email is InValid");
        }
        else if(name.trim().length==0){
            // isNameEmpty=true;
            alert("please enter username!")
        }
        else if(!passregex.test(password))
        {
            alert("Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number!");
        }
        else if( name && email && password && (password === reEnterPassword )){
                axios.post("http://localhost:9002/register", user)
                .then( res => {
                 alert(res.data.message)
                navigate("/login")
                })  
        } else {
            alert("Fill all the fields to register.")
        }
    }

    return (
        <div className="register">
            <img className="logo1" src={logo} alt="logo"/>
        {console.log("User", user)}
            <h1>Register</h1>
            <InputControl
                type ="text" 
                name="name" 
                label="Username"
                value={user.name} 
                placeholder="Enter your Name" 
                onChange={ handleChange }>
            </InputControl>
            
            <InputControl
                type ="text" 
                name="email" 
                label="Email"
                value={user.email}    
                placeholder="Enter your Email" 
                onChange={ handleChange }>
           </InputControl>
            <InputControl
                type ="password" 
                name="password" 
                label="Password"
                value={user.password} 
                placeholder="Enter your Password" 
                onChange={ handleChange }>
        </InputControl>
            <InputControl
                type ="password" 
                label="Confirm Password"
                name="reEnterPassword"
                value={user.reEnterPassword}  
                placeholder="Re-enter Password" 
                onChange={ handleChange }>
         </InputControl>

            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={ () => navigate("/login")}>Login</div>
        </div>
    )
}

export default Register
