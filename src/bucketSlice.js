import { createSlice } from "@reduxjs/toolkit";

const bucketSice =createSlice({
    name:"bucket",
    initialState:{
        bucket:[],
    },
    reducers:{
        setItem:(state,action)=>{
            state.bucket = [action.payload]
        }
    }
})


export const { setItem } = bucketSice.actions;
export default bucketSice.reducer
