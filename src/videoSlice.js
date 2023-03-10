import { createSlice } from "@reduxjs/toolkit";

const videoSlice =createSlice({
    name:"videos",
    initialState:{
        items:[],
        editItems:[]
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
        },
        addEditItem:(state,action)=>{
            state.editItems.push(action.payload)
        },
        removeEditItem:(state,action)=>{
            state.editItems = []
        }
    }
})


export const { addItem, removeItem,clearItems,addEditItem,removeEditItem } = videoSlice.actions;
export default videoSlice.reducer
