import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import spinnerReducer from "./spinnerReducer";
import userReducer from "./userReducer";
export const rootReduccer = combineReducers({
    userReducer,
    courseReducer,
    spinnerReducer,
})