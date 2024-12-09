import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import style from '../styleCSS/updatecard.module.css'
import axios from 'axios';



const UpdateCard = () => {
    let data = useLocation();
    let navigate= useNavigate();
    console.log(data);

let [updateCard,setUpdateCard] = useState({
    product_name:data.state.product.product_name,
    warranty_date:data.state.product.warranty_date,
    id:data.state.product.id
    
})

const handleChange=(e)=>{
    let{name,value} =e.target;
    setUpdateCard({...UpdateCard,[name]:value})

}

let handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(data.state.product);
    
    let response = await axios.put(`http://localhost:4500/${data.state.product_Type}/${data.state.product.id}`,updateCard);
    console.log(response);
    navigate("/HomePage/Electronics")
    
    
}
  return (
    <section className='updateCard'>

        <h1>Update Product</h1>
        <form  onSubmit={handleSubmit}>
            <div className={style["form"]}>
            <div>
                <label for="product_name">product_name:</label>
                <input type='text' id='product_name' name='product_name' placeholder='Enter your product_name' onChange={handleChange} value={updateCard.product_name}/> 

            </div>

        
            <div form={style["form"]}>
                <label for="warranty_date">warranty_date:</label>
                <input type='text' id='warranty_date' name='warranty_date' placeholder='Enter your warranty_date' onChange={handleChange} value={updateCard.warranty_date}/> 

            </div>

            
            <div form={style["form"]}>
                <label for="warranty_date">id:</label>
                <input type='text' id='id' name='id' readOnly placeholder='Enter your warranty id' value={updateCard.id}/> 

            </div>

            <div className={style["form"]}>
                <button>update product</button>
            </div>
            </div>

            







            
        </form>      
    </section>
  )
}

export default UpdateCard
