import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      id: 1,
      listName: "Default",
      todos: [
        {
          id: nanoid(),
          text: "text",
        },
      ],
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log(action.payload);
      const { listId, todo } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      // console.log(list);
      if (list) {
        list.todos.push({ id: nanoid(), text: todo });
      }
    },
    removeTodo: (state, action) => {
      // console.log(action.payload);
      const { listId, todoId } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        list.todos = list.todos.filter((todo) => todo.id !== todoId);
      }
    },

    addTodoList: (state, action) => {
      state.lists.push({
        id: nanoid(),
        listName: action.payload,
        todos: [],
      });
    },

    removeTodoList: (state, action) => {
      // console.log(action.payload);
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, addTodoList, removeTodoList } =
  todoSlice.actions;

export default todoSlice.reducer;
