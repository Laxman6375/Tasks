import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  addTodoList,
  lists as LT,
  removeTodo,
  removeTodoList,
} from "../redux/reducers/todoSlice";
import Todo from "./Todo";

const TodoList = () => {
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector(LT);

  //   console.log(lists);

  const handleOnchange = (e) => {
    setListName(e.target.value);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, targetIndex) => {
    // console.log(listIndex);
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData("text/plain");
    const sourceItem = JSON.parse(e.dataTransfer.getData("todo"));

    console.log("sourceIndex", sourceIndex);
    console.log("targetIndex", targetIndex);

    if (sourceIndex === targetIndex) return;

    // const sourceItem = todos[todoIndex];
    console.log("sourceItem", sourceItem);
    // console.log(listId);

    dispatch(
      removeTodo({ todoId: sourceItem.id, listId: lists[sourceIndex].id })
    );

    dispatch(
      addTodo({
        todo: sourceItem.text,
        listId: lists[targetIndex].id,
        id: sourceItem.id,
        tableId: lists[targetIndex].id,
      })
    );
  };

  //   console.log(todo);

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodoList(listName));
      setListName("");
    }
  };

  const handleRemoveTodoList = (listId) => {
    dispatch(removeTodoList(listId));
    // console.log(listId);
  };

  return (
    <div>
      <h1>Todo Tasks</h1>
      <div className=" flex items-start gap-3">
        <div className=" flex gap-3">
          {lists &&
            lists.map((list, index) => {
              return (
                <div
                  onDragOver={onDragOver}
                  onDrop={(e) => onDrop(e, index)}
                  className={`p-4 border border-black w-96 ${
                    onDragOver ? "" : ""
                  }`}
                  key={list.id}
                >
                  <div className="flex  justify-between items-center">
                    <p>{list.listName}</p>
                    <button
                      className=" text-red-700 font-bold cursor-pointer"
                      onClick={() => handleRemoveTodoList(list.id)}
                    >
                      X
                    </button>
                  </div>
                  <Todo listIndex={index} todos={list.todos} listId={list.id} />
                </div>
              );
            })}
        </div>
        <input
          value={listName}
          className=" outline"
          type="text"
          onChange={handleOnchange}
          onKeyDown={handleEnterKey}
          placeholder="Add Todo List"
        />
      </div>
    </div>
  );
};

export default TodoList;
