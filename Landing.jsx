import React from 'react'
import style from "../styleCSS/landing.module.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section className={style["main"]}>
    <div className={style["landing"]}>
      <div className={style["welcome"]} >Welcome to the Website  </div>
    </div>
    <Link to={"/HomePage"}><button className={style["but"]}>Click here</button></Link>

     
     </section>


  )
}

export default Landing
