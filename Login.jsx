import React, { useState } from 'react';
import style from "../styleCSS/Login.module.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';



const Login = () => {
  let navigate=useNavigate()
  let [loginData,setLoginData]=useState({
    userName:"",

    password:"",
    
    
})

let handelChnage=(e)=>{
let {name,value}=e.target;
setLoginData({...loginData, [name]:value})

}

let handleSubmit=async (e)=>{
  console.log("hello")
  e.preventDefault();
     let response=await axios.get("http://localhost:4500/customer");
     console.log(response)
      let costomer = response.data;
     let userData= costomer.find(element => element.password == loginData.password);
      console.log(userData)
      if (userData) {
        console.log("succesful")
             toast.success("Login Succesfully");
     setTimeout(()=>{
        navigate("/homePage")
     },1500)
      }else{
        console.log("error")
        toast.error("something went wrong")
      }

}

  

  
  return (
    <section className={style["main"]}>
    <div className={style["login"]}>
   
        <h2>Login</h2>
    <form >
      <div className={style["log"]}>
        <label htmlFor='username' >UserName</label>
        <input type='text' id='username' name='userName' required onChange={handelChnage}/>

      </div>
      

      <div className={style["log"]}>
      <label htmlFor='email' >Passward</label>
      <input type='passward' id='passward' name='passward' required onChange={handelChnage}/>
      </div>

      <button>login</button>

      
    </form>
    </div>
    </section>
    
  )
}

export default Login
