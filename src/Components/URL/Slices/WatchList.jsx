import { createSlice } from "@reduxjs/toolkit";



const watchListSlice = createSlice({
    name:"watchList",
    initialState:{
        watchListItem:[],
    },
    reducers:{
        addItemToWatchList:(state,action)=>{
            state.watchListItem.push(action.payload)
            // console.log( state.watchListItem)
        },
        removeItemFromWatchList:(state,action) =>{
        },
        clearWatchList:(state,action)=>{
            state.watchListItem.length = 0
        }
    }
})

export const {addItemToWatchList , removeItemFromWatchList , clearWatchList} = watchListSlice.actions;

export default watchListSlice.reducer;