import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface OptionUrlState {
  optionUrl: string;
  listUrl: string;
}

const initialState: OptionUrlState = {
  optionUrl: '',
  listUrl: '',
};

export const workoutSlice = createSlice({
  name: 'workoutData',
  initialState,
  reducers: {
    setOptionUrl: (state, action: PayloadAction<string>) => {
      state.optionUrl = action.payload;
    },
    setListUrl: (state, action: PayloadAction<string>) => {
      state.listUrl = action.payload;
    },
  },
});

export const { setOptionUrl, setListUrl } = workoutSlice.actions;

export default workoutSlice.reducer;
