import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const user = useSelector((state) => state.userReducer.users);
  console.log(user);

  return (
    <div className='flex flex-wrap gap-10 h-[7rem] p-10 justify-center items-center bg-[#901E3E] font-bold text-2xl'>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/Products">Products</NavLink>
      {
        user ? <>
          <NavLink to="/admin/create-products">Create Products</NavLink>
        </> : <>
          <NavLink to="/Login">Login</NavLink>
        </>
      }
    </div>
  )
}

export default NavBar