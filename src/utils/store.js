import { configureStore } from "@testing-library/react";
import appSlice from "./appSlice"



const store = configureStore({

    reducer : {
        app : appSlice      
    }
});

export default store;