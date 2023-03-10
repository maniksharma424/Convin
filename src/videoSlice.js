import { createSlice } from "@reduxjs/toolkit";

const videoSlice =createSlice({
    name:"videos",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items = state.items.filter(item=>item!==action.payload)
        },
        clearItems:(state,action)=>{
            state.items = []
        }
    }
})


export const { addItem, removeItem,clearItems } = videoSlice.actions;
export default videoSlice.reducer
