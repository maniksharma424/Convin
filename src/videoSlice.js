import { createSlice } from "@reduxjs/toolkit";

const videoSlice =createSlice({
    name:"videos",
    initialState:{
        items:[],
        editItems:[],
        deleteVideoId:0
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items = state.items.filter(item=>item!==action.payload)
        },
        clearItems:(state)=>{
            state.items = []
        },
        addEditItem:(state,action)=>{
            state.editItems.push(action.payload)
        },
        removeEditItem:(state)=>{
            state.editItems = []
        },
        setDeleteVideoId:(state,action)=>{
            state.deleteVideoId = action.payload
        }
    }
})


export const { addItem, removeItem,clearItems,addEditItem,removeEditItem,setDeleteVideoId } = videoSlice.actions;
export default videoSlice.reducer
