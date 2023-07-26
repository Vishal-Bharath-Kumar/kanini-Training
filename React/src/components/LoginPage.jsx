import React, { useState } from 'react';
import './LoginPage.css';
import QuoteImage from '../assets/qoute.png';
import Mask from '../assets/Mask group.png';
import Group from '../assets/Group 5784.png';
import Logo from '../assets/logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [maskedPassword, setMaskedPassword] = useState('');
   // Handle password change and mask it with asterisks
   const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setMaskedPassword(maskPassword(value));
    setIsValid(validatePassword(value));
  };

  const validatePassword = (value) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    let isValid = true;
    const newErrors = {};

    if (!value) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (value.length < minLength) {
      newErrors.password = `Password must be at least ${minLength} characters long`;
      isValid = false;
    } else if (!hasUpperCase || !hasLowerCase || !hasNumber) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const maskPassword = (value) => {
    return "*".repeat(value.length);
  };
   // Validate email and password
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
   // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic goes here
    }
  };
  const logindata = () =>{
    const loginuser = {
      email:email,
      password:password
    }

    fetch(`https://localhost:7281/api/User/authenticate`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(loginuser),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Login failed"); // Throw an error if response status is not 2xx
      }
      return response.json();
    })
    .then(data => {
      console.log("Login successfully");
    })
    .catch(error=>{
      console.error("login error in:",error);
    })
  };
  return (
  //  Enclose the code in a div with class name "wrapper"
    <div className="wrapper">
   {/* Enclose the background images in a div with class name "backgrounds" */}
      <div className="backgrounds">
    {/*  Enclose the left column in a div with class name "leftcol" */}
        <div className="leftcol">
      {/*  Enclose the middle banner image in a div with class name "middlebanner" */}
            <div className="middlebanner">
              <img src={QuoteImage} alt="middlebanner"  height='58px' width='58px'/>
            </div>
       {/* Add a main heading with class name "mainhead" */}
        <p className="mainhead">Helps You To Evaluate Skills</p>
       {/* Add a subheading with class name "subhead" */}
            <p className="subhead">Kanini Evaluation Platform</p>
          </div>
     {/* Add a top banner image */}
        <div>
          <img src={Mask} className="topbanner" alt="topbanner" />
        </div>
     {/* Add a bottom banner image with class name "btmbanner" */}
        <div className="btmbanner">
          <img src={Group} className="bottombanner" alt="bottombanner" />
        </div>
      </div>
   {/* Add a form with class name "valid" and onSubmit function handleSubmit */}
      <div className="valid px-5">
        <form onSubmit={handleSubmit}>
       {/* Add a logo image with class name "logo" */}
          <div>
            <img src={Logo} alt="logo" className="logo" />
          </div>
       {/* Add a heading with class name "Text1" */}
          <div className="forms">
            <h3 className="Text1">Sign In</h3>
         {/* Add a paragraph with class name "Text" */}
            <p className="Text">Welcome back! Please enter email id and password</p>
         {/* Add a label for email input with class name "Text2" */}
            <label className="Text2" htmlFor="email">
              Email ID
            </label>
            <br />
         {/* Add an email input with class name "input" and value of email state */}
            <input
              type="email"
              className="input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
         {/* Display email validation error if it exists */}
            {errors.email && <span className="error">{errors.email}</span>}
            <br /> <br />
         {/* Add a label for password input with class name "Text2" */}
            <label className="Text2" htmlFor="password">
              Password
            </label>
            <br />
         {/* Add a password input with class name "input" and masked value of password state */}
         <input
            type="text"
            className="input"
            id="password"
            value={maskedPassword}
            onChange={handlePasswordChange}
          />
          <br/>
          {/* Display password validation error if it exists */}
          {errors.password && <span className="error">{errors.password}</span>}
          {isValid && <p>Password is valid</p>}
         {/* Add a div with class name "forgot" and a link for password reset */}
            <div className="forgot">
              <a className="paswrd">Forgot your password?</a>
              <br /> <br /> <br />
            </div>
         {/* Add a submit button with class name "btns" and a link for sign in */}
            <button className="btns" type="submit" onClick={logindata}>
              <a className="signin" >SIGN IN</a>
            </button>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;