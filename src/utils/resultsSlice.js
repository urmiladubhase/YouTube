import { createSlice } from "@reduxjs/toolkit";

 const resultsSlice = createSlice({

    name: "SearchResults",
    initialState: {
        searchResults:[]
    },
    reducers:{

        addSearchResults:(state,action) =>{
            state.searchResults = action.payload;
        }

    }

 });
 export const {addSearchResults} = resultsSlice.actions;

 export default resultsSlice.reducer;
  

