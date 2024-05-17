import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name:'modal',
    initialState:{
        showModal:false,
        item:{}
    },
    reducers:{
        setShowModal:(state,action)=>{
            state.showModal = action.payload;
        },
        setItem:(state,action)=>{
           state.item = action.payload;
        },
        closeModal:(state)=>{
            state.showModal=false;
            state.item={};
        }
    }
})

export const {setShowModal,setItem,closeModal}=modalSlice.actions;
export default modalSlice.reducer;