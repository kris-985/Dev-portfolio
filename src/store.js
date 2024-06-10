import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { languageReducer } from './reducers';

const rootReducer = combineReducers({
  /*slices*/
  languageReducer
});

const store = configureStore({
  reducer: rootReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;