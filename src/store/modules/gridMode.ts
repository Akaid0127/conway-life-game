import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "gridMode",
  initialState: {
    value: "normal",
  },
  reducers: {
    gridModeSet: (state, actions: PayloadAction<string>) => {
      state.value = actions.payload;
    },
  },
});

export const { gridModeSet } = modeSlice.actions;
export default modeSlice.reducer;
