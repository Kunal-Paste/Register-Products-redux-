import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
  const data = useSelector((state)=>state);
  console.log(data);
  
  return (
    <div className='h-screen bg-[#FFE6E1]'>Products</div>
  )
}

export default Products