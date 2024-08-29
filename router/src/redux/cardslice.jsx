import { createSlice } from "@reduxjs/toolkit";

const cardslice=createSlice({
    name:"card",
    initialState:{
        productData:[],
    },
    reducers:{
        addToCard(state,action){//addToCard is the Name of Action
            const userData=action.payload;// we recevied the userdata by using action.payload property
            state.productData.push(userData);//We are trying to add the data into the productData Array so that the array elemnets are push and the action can be performed as well as the state can be increases
        }
    }
})
//Exporting the action i.e. addToCard
const {addToCard} = cardslice.actions;
//Exporting Reducer
export default cardslice.reducer;