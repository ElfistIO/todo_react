import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "http://localhost:5000/todos";

const initialState = {
  loading: true,
  error: false,
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setTodos: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.todos = payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setTodos, setError } = todosSlice.actions;

export const todosSelector = (state) => state.todos;

export default todosSlice.reducer;

export function fetchTodos() {
  return async (dispatch) => {
    axios
      .get(API_URL)
      .then((response) => {
        dispatch(setTodos(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
}

// export function fetchPaginateTodos(itemOffset, endOffset) {
//   return async (dispatch) => {
//     axios
//       .get(API_URL)
//       .then((response) => {
//         dispatch(setTodos(response.data.slice(itemOffset, endOffset)));
//       })
//       .catch((error) => {
//         dispatch(setError(error.message));
//       });
//   };
// }
