import { configureStore } from "@reduxjs/toolkit";
import cardslice from "./cardslice";

const store=configureStore({
    reducer:{
        card:cardslice,
    }
})
export default store;