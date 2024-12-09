import React, { useContext, useEffect } from 'react'
import { globalVar } from '../globalContext/GlobalContext'
import earbuds from '../asset/earbuds.jpg'
import style from '../styleCSS/electronics.module.css'
import Card from './Card'
import { useLoaderData } from 'react-router-dom'

const Electronics = () => {

  let{products,fetchProducts,setProducts,card,setCard,refreshId}=useContext(globalVar);
  let data = useLoaderData();

  
  console.log(products)
  useEffect(()=>{
    fetchProducts("http://localhost:4500/Electronics")
  },[refreshId]);
return (
    <section className={style["main"]}>
    {products.map((ele,i)=>{
      return <Card product ={ele} key={i+1}/>
    })}
      
    </section>
)
};

export default Electronics
