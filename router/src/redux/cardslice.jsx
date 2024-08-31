import { createSlice } from "@reduxjs/toolkit";


const cardslice=createSlice({
    name:"card",
    initialState:{
        productData:[],
    },
    reducers:{
        addToCard(state,action){
            const userData= action.payload;
            state.productData.push(userData);
            console.log(userData);
        },
        emptyData(state,action){
            state.productData=[];
        },
        removeProduct(state, action){
            const id=action.payload;
            state.productData = state.productData.filter(product => product.id !== id);
        }
    }
})

//exporting actions
export const {addToCard}=cardslice.actions;
export const { emptyData}=cardslice.actions;
export const {removeProduct}=cardslice.actions;

//exporting reducer
export default cardslice.reducer;