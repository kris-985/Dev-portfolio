import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
};

const languageReducer = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});
export const { changeLanguage } = languageReducer.actions;

export default languageReducer.reducer;