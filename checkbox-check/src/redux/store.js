import { configureStore } from "@reduxjs/toolkit";
import checkBoxReducer from "./reducers/checkBoxSlice";

export const store = configureStore({
  reducer: {
    checkBox: checkBoxReducer,
  },
});
