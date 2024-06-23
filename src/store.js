import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers/languageReducer.js";

const rootReducer = combineReducers({
  language: languageReducer, 
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
