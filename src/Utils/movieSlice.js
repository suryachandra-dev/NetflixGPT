import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailers:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        removeNowPlayingMovie:(state,action)=>{
            return null;
        }
    }
});
export const {addNowPlayingMovies, removeNowPlayingMovie,addTrailers}=movieSlice.actions;
export default movieSlice.reducer;