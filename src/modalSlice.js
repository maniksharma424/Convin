import { createSlice } from "@reduxjs/toolkit";

const modalSlice =createSlice({
    name:"modal",
    initialState:{
        showBucketModal:false,
        showAddCardModal:false,
        showEditModal:false,
        playVideoMOdal:false
    },
    reducers:{
        show:(state,action)=>{
            state.showBucketModal = true
        },
        hide:(state,action)=>{
            state.showBucketModal = false
        },
        ShowAddCardModal:(state)=>{
            state.showAddCardModal = true
        },
        hideAddCardModal:(state)=>{
            state.showAddCardModal = false
        },
        showEditModal:(state)=>{
            state.showEditModal = true
        },
        hideEditModal:(state)=>{
            state.showEditModal = false
        },
        showPlayVideoModal:(state)=>{
         state.playVideoMOdal = true   
        },
        hidePlayVideoModal:(state)=>{
            state.playVideoMOdal = false
        }

    }
})


export const { show,hide,ShowAddCardModal,hideAddCardModal,showEditModal,hideEditModal,showPlayVideoModal,hidePlayVideoModal } = modalSlice.actions;
export default modalSlice.reducer