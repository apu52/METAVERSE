import { configureStore } from "@reduxjs/toolkit";
import alertsSlice from "./alertsSlice";

const store =  configureStore ({
    reducer: {
        alerts: alertsSlice
    }
})

export default store;

