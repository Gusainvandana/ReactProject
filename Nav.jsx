import React from 'react'
import style from "../styleCSS/navbar.module.css"
import { Link } from "react-router-dom"
import logo from "../asset/logo.png"



const Nav = () => {
  return (
    
    <nav className={style["navbar"]} >
    <div className={style["logo"]}>
      <Link to={"/"}>
        <img src={logo}></img>
      </Link>
    </div>
      
        
        <ul>
            
           
            <li> <Link to={"/HomePage/Electronics"}>Electronics </Link></li>
            <li><Link to={"/HomePage/Medical"}>Medical</Link></li>
            <li><Link to={"/HomePage/Household"}>Household</Link></li>
            <li><Link to={"/HomePage/Groceries"}>Groceries</Link></li> 
            <li><button><Link to={"/SignUp"}>SignUp</Link></button></li>
            <li><button><Link to={"/Login"}>Login</Link></button></li>
           
        </ul>

        
    
    </nav>
   
  )
}

export default Nav
