import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Components/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
