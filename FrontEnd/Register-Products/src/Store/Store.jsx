import { configureStore } from "@reduxjs/toolkit";
import UserSlice from  "./Reducers/UserSlice"
import ProductSlice from  "./Reducers/ProductSlice"
import CartSlice from  "./Reducers/CartSlice"

export const store = configureStore({
    reducer:{
       userReducer:UserSlice,
       productReducer:ProductSlice,
       cartReducer:CartSlice
    },
})