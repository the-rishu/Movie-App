import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './Slices/Search'
import watchListReducer from './Slices/WatchList'

const appStore = configureStore({
    reducer:{
        search : searchReducer,
        watchList:watchListReducer,
    }
})

appStore.subscribe(()=>{
    sessionStorage.setItem("reduxstate",JSON.stringify(appStore.getState()))
})

export default appStore;