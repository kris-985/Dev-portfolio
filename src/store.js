import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import languageReducer from "./reducers/languageReducer.js";

const rootReducer = combineReducers({
  language: languageReducer, // use 'language' instead of 'languageReducer' to match the state structure
});

const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
