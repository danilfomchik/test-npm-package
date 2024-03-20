import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TTodo } from "../comtonents/types";

type TTodoState = {
  list: TTodo[];
  editTodo: TTodo | null;
};

export const fetchTodo = createAsyncThunk<TTodo[], undefined>(
  "todo/fetch",
  async () => {
    const response = await axios(
      "https://6425805b7ac292e3cf0278f7.mockapi.io/api/todo"
    );
    return response.data;
  }
);

export const postTodo = createAsyncThunk<TTodo, { title: string }>(
  "todo/post",
  async (todo) => {
    const response = await axios.post(
      "https://6425805b7ac292e3cf0278f7.mockapi.io/api/todo",
      todo
    );
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk<TTodo, string>(
  "todo/delete",
  async (id) => {
    const response = await axios.delete(
      `https://6425805b7ac292e3cf0278f7.mockapi.io/api/todo/${id}`
    );
    return response.data;
  }
);

export const updateTodo = createAsyncThunk<TTodo, TTodo>(
  "todo/update",
  async (todo) => {
    const response = await axios.put(
      `https://6425805b7ac292e3cf0278f7.mockapi.io/api/todo/${todo.id}`,
      todo
    );
    return response.data;
  }
);

const initialState: TTodoState = {
  list: [],
  editTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setEditTodo(state, action: PayloadAction<TTodo>) {
      state.editTodo = action.payload;
    },
    clearEditTodo(state) {
      state.editTodo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.list = action.payload;
    });

    builder.addCase(postTodo.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    });
  },
});

export default todoSlice.reducer;
export const { setEditTodo, clearEditTodo } = todoSlice.actions;
