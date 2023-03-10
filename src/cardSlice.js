import { createSlice } from "@reduxjs/toolkit";

const cardSlice =createSlice({
    name:"card",
    initialState:{
        checkbox:false,
    },
    reducers:{
        check:(state,action)=>{
            state.checkbox = true
        },
        uncheck:(state)=>{
            state.checkbox = false
        }
    }
})


export const { check,uncheck } = cardSlice.actions;
export default cardSlice.reducer