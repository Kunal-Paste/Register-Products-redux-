import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import Register from '../Pages/Register'
import CreateProducts from '../Pages/Admin/CreateProducts'
import UpdateProducts from '../Pages/Admin/UpdateProducts'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/admin/create-products' element={<CreateProducts/>}/>
        <Route path='/admin/update-products/:id' element={<UpdateProducts/>}/>
    </Routes>
  )
}

export default MainRoute