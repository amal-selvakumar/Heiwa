import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

type ItemType={
    imageUrl?:string;
    title?:string;
}

type ModalType={
    showModal:boolean,
    item:{
        imageUrl?:string;
        title?:string;
    }
}

const initialState:ModalType={
    showModal:false,
    item:{}
}

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
      setShowModal:(state,action:PayloadAction<boolean>)=>{
        state.showModal=action.payload;
      },
      
      setItem:(state,action:PayloadAction<ItemType>)=>{
        state.item=action.payload;
      },

      closeModal:(state)=>{
        state.showModal=false;
        state.item={};
      }
    }
})

export const {setShowModal,setItem,closeModal}=modalSlice.actions;
export default modalSlice.reducer;