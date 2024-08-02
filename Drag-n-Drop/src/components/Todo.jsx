import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/reducers/todoSlice";

const Todo = ({ todos, listId, listIndex }) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

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
        })
      );
      setTodo("");
    }
  };

  const handleRemoveTodo = (todoId) => {
    dispatch(removeTodo({ todoId, listId }));
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
              <p>{todo.text}</p>
              <div className=" flex items-center justify-center gap-2">
                <button
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
                </button>
                <button
                  className="px-2 py-1 bg-red-700 text-white rounded-lg cursor-pointer"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  Delete
                </button>
              </div>{" "}
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
