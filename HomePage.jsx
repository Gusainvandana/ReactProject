import React from 'react'
import Nav from './Nav'
import {Outlet} from "react-router-dom"
import image from '../asset/image.webp'
import u from '../asset/u.webp'
import style from "../styleCSS/homepage.module.css"

const HomePage = () => {
  return (
    <div>
      <Nav/>
        {/* <img src={image} className={style["img"]}></img>
        <img src={u} className={style["u"]}></img> */}
      <Outlet/>
    </div>
  )
}

export default HomePage
