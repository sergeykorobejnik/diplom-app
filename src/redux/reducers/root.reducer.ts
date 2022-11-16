import authReducer from "./auth.reducer";
import {combineReducers} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    auth: authReducer,
});
