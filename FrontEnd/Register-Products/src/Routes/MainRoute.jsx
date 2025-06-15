import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import Register from '../Pages/Register'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Register' element={<Register/>}/>
    </Routes>
  )
}

export default MainRoute