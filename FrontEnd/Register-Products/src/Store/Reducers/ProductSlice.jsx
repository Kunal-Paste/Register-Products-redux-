import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
}

const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
      loadcart : (state,action)=>{
          state.products = action.payload;
      }
    }
})

export default ProductSlice.reducer;
export const {loadcart} = ProductSlice.actions;