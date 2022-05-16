import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todos from "../Components/TodoList/TodoListSlice";

const reducer = combineReducers({ todos });

export const store = configureStore({
  reducer,
});
