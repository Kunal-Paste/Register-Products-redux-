import React, { useEffect } from 'react'
import NavBar from './Components/NavBar'
import MainRoute from './Routes/MainRoute'
import axios from './Api/axiosconfig'
import { useDispatch } from 'react-redux'
import { asynccurrentuser } from './Store/Actions/UserAction'
import { asyncloadproduct } from './Store/Actions/ProductAction'

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(asynccurrentuser());
    dispatch(asyncloadproduct());
  },[])
  // const getproducts = async () => {
  //   try {
  //     let res = await axios.get("/products")
  //     console.log(res);

  //   } catch (error) {
  //     console.log(error);

  //   }
  // }
  // useEffect(() => {
  //   getproducts();
  // }, [])
  return (
    <>
      <NavBar />
      <MainRoute />
    </>
  )
}

export default App