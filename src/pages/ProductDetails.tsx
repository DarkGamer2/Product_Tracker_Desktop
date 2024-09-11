import React from 'react'
import { useNavigate } from 'react-router-dom';
const ProductDetails = () => {
const navigate=useNavigate();

const goBack=()=>{
 navigate(-1)
}
  return (
    <div>Product Details

        <div className='text-center'>
            <button className='text-white bg-pink py-2 px-2 rounded-md font-bebasNeue uppercase' onClick={goBack}>Go Back</button>
        </div>
    </div>
  )
}

export default ProductDetails