import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action) => {
            state.users = action.payload;
        }
    }
})

export default UserSlice.reducer;
export const { loaduser } = UserSlice.actions;