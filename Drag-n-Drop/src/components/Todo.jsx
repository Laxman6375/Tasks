import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "../redux/reducers/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const Todo = ({ todos, listId, listIndex }) => {
  const [todo, setTodo] = useState("");
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const [editTodoId, seteditTodoId] = useState(null);

  console.log(listIndex, " ", listId);

  const onDragStart = (e, todo) => {
    e.dataTransfer.setData("text/plain", listIndex);
    e.dataTransfer.setData("todo", JSON.stringify(todo));
  };

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleMoveForward = (todoId, todoText) => {
    if (listIndex < lists.length - 1) {
      dispatch(removeTodo({ todoId, listId }));
      dispatch(
        addTodo({
          todo: todoText,
          listId: lists[listIndex + 1].id,
          id: todoId,
          tableId: lists[listIndex + 1].id,
        })
      );
    }
  };

  const handleMoveBackward = (todoId, todoText) => {
    if (listIndex > 0) {
      dispatch(removeTodo({ todoId, listId }));
      dispatch(
        addTodo({
          todo: todoText,
          listId: lists[listIndex - 1].id,
          id: todoId,
          tableId: lists[listIndex - 1].id,
        })
      );
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      dispatch(
        addTodo({
          todo,
          listId,
          id: nanoid(),
          tableId: listId,
        })
      );
      setTodo("");
    }
  };

  const handleRemoveTodo = (todoId) => {
    dispatch(removeTodo({ todoId, listId }));
  };

  const handleEditTodo = (todoId, todoText) => {
    setEditText(todoText);
    seteditTodoId(todoId);
  };

  const handleEditPress = (e, todoId) => {
    if (e.key === "Enter") {
      dispatch(
        editTodo({
          editText,
          listId,
          id: todoId,
          tableId: listId,
        })
      );
      setEditText("");
      seteditTodoId(null);
    }
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        {todos &&
          todos.map((todo, index) => (
            <div
              draggable
              onDragStart={(e) => onDragStart(e, todo)}
              className="flex justify-between items-center bg-slate-800 px-2 py-1 text-white rounded-lg"
              key={todo.id}
            >
              {editTodoId === todo.id ? (
                <div>
                  <input
                    value={editText}
                    className={`outline text-black`}
                    type="text"
                    onChange={handleEditChange}
                    onKeyDown={(e) => handleEditPress(e, todo.id)}
                    placeholder="Edit Todo"
                  />
                </div>
              ) : (
                <p>{todo.text}</p>
              )}
              <div className=" flex items-center justify-center gap-2">
                <button
                  className="px-2 py-1 bg-blue-600 text-white rounded-lg cursor-pointer"
                  onClick={() => handleEditTodo(todo.id, todo.text)}
                >
                  Edit
                </button>
                {/* <button
                  className="px-2 py-1 bg-blue-600 text-white rounded-lg cursor-pointer"
                  onClick={() => handleMoveBackward(todo.id, todo.text)}
                >
                  Back
                </button>
                <button
                  className="px-2 py-1 bg-blue-600 text-white rounded-lg cursor-pointer"
                  onClick={() => handleMoveForward(todo.id, todo.text)}
                >
                  Next
                </button> */}
                <button
                  className="px-2 py-1 bg-red-700 text-white rounded-lg cursor-pointer"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      <input
        value={todo}
        className="outline"
        type="text"
        onChange={handleOnChange}
        onKeyDown={handleEnterKey}
        placeholder="Add Todo"
      />
    </div>
  );
};

export default Todo;
