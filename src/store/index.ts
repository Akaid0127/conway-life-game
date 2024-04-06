import { configureStore } from "@reduxjs/toolkit";
import gridArrayReducer from "./modules/gridArray";
import gridModeReducer from "./modules/gridMode";

const store = configureStore({
  reducer: {
    gridArray: gridArrayReducer,
    gridMode: gridModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
