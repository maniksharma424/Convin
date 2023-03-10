import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice";

const store = configureStore({
    reducer:{
        videos:videoSlice
    }
})
export default store