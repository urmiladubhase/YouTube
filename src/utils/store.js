import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import resultsSlice from "./resultsSlice"

const store = configureStore({
    reducer:{
        app: appSlice,
        searchResults: resultsSlice
    
    },
});

export default store;