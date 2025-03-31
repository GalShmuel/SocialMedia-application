import { combineReducers } from "redux"; // Import combineReducers from Redux
import AuthReducer from "./AuthReducer"; // Import the AuthReducer

// Combine all reducers into a single root reducer
export const reducers = combineReducers({ AuthReducer });
