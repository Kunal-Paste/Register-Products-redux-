import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const Products = () => {
  const data = useSelector((state)=>state.productReducer.products);
  console.log(data);
  const renderproducts = data.map((p)=>{
    return (
      <div key={p.id} className='bg-violet-400 flex flex-col gap-10 p-5 rounded-[1rem] w-[300px]'>
        <img className='object-cover h-[300px] rounded-[2rem] shadow-black' src={p.image} alt="" />
        <h1 className='text-2xl font-bold uppercase'>{p.name}</h1>
        <p className='font-mono'>{p.description}</p>
        <div className='flex justify-between'>
          <span className='font-semibold'>{p.price}-RS</span>
          <button className='bg-emerald-500 p-[10px] text-[1rem] rounded-2xl font-semibold -mt-[1rem]'>ADD TO CART</button>
        </div>
        <Link to={`/products-details/${p.id}`} className='text-blue-700'>More Info</Link>
      </div>
    )
  })
  return (
    data.length > 0 ? <div className='min-h-screen w-full bg-[#FFE6E1] flex-wrap flex gap-10 justify-start p-20'>{renderproducts}</div> : 'Loading...'
  )
}

export default Products