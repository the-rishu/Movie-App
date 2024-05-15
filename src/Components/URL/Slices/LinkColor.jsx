import { createSlice } from "@reduxjs/toolkit";

const ColorSlice = createSlice({
    name:"LinkColor",
    initialState : "changeColor",
    reducers:{
        getLinkColor:(state,action) =>{
            state.initialState = action.payload;
        }
    }
})