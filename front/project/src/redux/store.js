import { configureStore } from "@reduxjs/toolkit";
import vegetableSlice from "./reducer/ProductSlice";


export const store = configureStore({
    reducer: {
        vegetable: vegetableSlice
    }
})