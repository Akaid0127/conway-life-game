import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getInitArr } from "../../utils/getInitArr";

// init 20 * 20
const initArr: number[][] = getInitArr(20, 20);

export const gridSlice = createSlice({
  name: "gridArray",
  initialState: {
    value: initArr,
    heatArr: initArr,
  },
  reducers: {
    gridArraySet: (state, actions: PayloadAction<number[][]>) => {
      state.value = actions.payload;
    },
    heatArrReset: (state) => {
      state.heatArr = state.value.map((row) => row.map((value) => value * 10));
    },
    heatArrIterate: (state, actions: PayloadAction<number[][]>) => {
      const tempValueOld: number[][] = JSON.parse(JSON.stringify(state.value));
      const tempValueNew: number[][] = JSON.parse(JSON.stringify(actions.payload));
      const tempHeatArr: number[][] = JSON.parse(JSON.stringify(state.heatArr));

      state.heatArr = tempHeatArr.map((rowItem, rowIndex) => {
        return rowItem.map((colItem, colIndex) => {
          if (tempValueOld[rowIndex][colIndex] == 1 && tempValueNew[rowIndex][colIndex] == 0) {
            return 9;
          } else if (colItem < 10 && tempValueNew[rowIndex][colIndex] == 0 && colItem > 0) {
            return colItem - 1;
          }
          return colItem;
        });
      });
    },
  },
});

export const { gridArraySet, heatArrReset, heatArrIterate } = gridSlice.actions;
export default gridSlice.reducer;
