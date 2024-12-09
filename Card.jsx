import React from 'react'
import style from '../styleCSS/crad.module.css'
import earbuds from '../asset/earbuds.jpg'
import { useContext } from 'react'
import { globalVar } from '../globalContext/GlobalContext'
import { useNavigate } from 'react-router-dom'

const Card = ({product}) => {
  let{handleProductDelete} = useContext(globalVar)
  let navigate=useNavigate()

  let handleUpdate=()=>{
    navigate("/UpdateCard",{state:{product,product_Type:"Electronics"}})
  }
  return (
    <div>
      <div className={style["card"]}><img src={product.image}></img>
      <p>{product.id}</p>
      <p>{product.product_name}</p>
      <p>{product.warranty_date}</p>
      <button className={style["update"]} onClick={handleUpdate}>Update</button>
      <button className={style["delete"]} onClick={()=>{handleProductDelete("Electronics",product.id)}}>Delete</button>

      </div>
    </div>
  )
}

export default Card
