import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchItem:null
    },
    reducers: {
        searchingMovie: (state,action)=>{
            state.searchItem = action.payload;
            console.log(state.searchItem)
        }
    }
})

export const {searchingMovie} = searchSlice.actions;

export default searchSlice.reducer;