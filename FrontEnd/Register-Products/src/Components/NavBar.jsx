import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex flex-wrap gap-10 h-[7rem] p-10 justify-center items-center bg-[#901E3E] font-bold text-2xl'>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Products">Products</NavLink>
    </div>
  )
}

export default NavBar