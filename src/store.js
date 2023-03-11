import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./bucketSlice";
import cardSlice from "./cardSlice";
import BucketModal from "./Components/BucketModal";
import historySlice from "./historySlice";
import modalSlice from "./modalSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
    reducer:{
        videos:videoSlice,
        bucket:bucketSlice,
        modal:modalSlice,
        card:cardSlice,
        history:historySlice
    }
})
export default store