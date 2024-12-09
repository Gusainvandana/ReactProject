import React, { useState } from 'react';
import style from "../styleCSS/signup.module.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';




const SignUp =()=>{
  let navigate = useNavigate()
  let[data,setData] = useState({
    userName:"",
    email:"",
    passward:"",
    contact:"",
    address:""
  })

  let handleChange=(e)=>{
    let {name,value}=e.target;
    setData({...data,[name]:value})
  }

  let handleSubmit=async (e)=>{
    e.preventDefault();
      let response=await axios.post("http://localhost:4500/customer",data);
      toast.success("User is created successfully");
      setTimeout(()=>{
        navigate("/homePage")
      },1500)
  
}


  return (
    
    <div className={style["signup"]}>
    <h2>Sign</h2>
    <form onSubmit={handleSubmit}>
      <div className={style["form"]}>
        <label htmlFor='username' >UserName</label>
        <input type='text' id='username' name='userName' required onChange={handleChange}/>

      </div>
      
      <div className={style["form"]}>
      <label htmlFor='email' >Email</label>
      <input type='email' id='email' name='email' required onChange={handleChange}/>
      </div>

      <div className={style["form"]}>
      <label htmlFor='email' >Passward</label>
      <input type='passward' id='passward' name='passward' required onChange={handleChange}/>
      </div>

      <div className={style["form"]}>
      <label htmlFor='tel' >Contact</label>
      <input type='tel' id='tel' name='tel' required onChange={handleChange}/>
      </div>

      <div className={style["form"]}>
      <label htmlFor='address' >Address</label>
      <input type='address' id='passward' name='passward' required onChange={handleChange}/>
      </div>

      <button className={style["button"]}>SignUp</button>


    </form>
      
    </div>
  )
}

export default SignUp
