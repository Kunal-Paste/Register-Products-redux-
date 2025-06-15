import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadcart: (state, action) => {
            state.users = action.payload;
        }
    }
})

export default UserSlice.reducer;
export const { loadcart } = UserSlice.actions;