import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import Register from '../Pages/Register'
import CreateProducts from '../Pages/Admin/CreateProducts'
import UpdateProducts from '../Pages/Admin/UpdateProducts'
import { ProductDeatils } from '../Pages/Admin/ProductDeatils'
import { useSelector } from 'react-redux'
import UserProfile from '../Pages/User/UserProfile'
import PageNotFound from '../Pages/PageNotFound'
import AuthWrapper from './AuthWrapper'

const MainRoute = () => {
  const { users } = useSelector((state) => state.userReducer);
  console.log(users);

  return (
    <Routes>
      <Route path='/Home' element={users ? <Products /> : <Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/admin/create-products' element={<AuthWrapper>
        <CreateProducts />
      </AuthWrapper>} />
      <Route path='/admin/user-profile' element={<AuthWrapper>
        <UserProfile />
      </AuthWrapper>} />
      <Route path='/products-details/:id' element={<AuthWrapper>
        <ProductDeatils />
      </AuthWrapper>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default MainRoute