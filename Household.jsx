import React,{ useContext} from 'react'
import { globalVar } from '../globalContext/GlobalContext';
import { useEffect } from 'react';
import Card from './Card';
import style from '../styleCSS/household.module.css'
import { useLoaderData } from 'react-router-dom';
const Household = () => {

  let{products,fetchProducts,setProducts,card,setCard,refreshId}=useContext(globalVar);
  let data = useLoaderData();

  
  console.log(products)
  useEffect(()=>{
    fetchProducts("http://localhost:4500/HouseHold")
  },[refreshId]);
return (
    <section className={style["main"]}>
    {products.map((ele,i)=>{
      return <Card product ={ele} key={i+1}/>
    })}
      
    </section>
)
};

export default Household

