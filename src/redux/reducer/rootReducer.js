import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import userReducer from "./userReducer";

export const rootReduccer = combineReducers({
    userReducer,
    courseReducer,
})