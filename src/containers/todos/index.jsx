import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { dragStart, drop, fetchTodosByUserId } from "../../slices/todos";
import store from "../../store";

export const Todos = ({ todos = [{ title: "chtoto", completed: true, id: 2 }] }) => {
  const dispatch = useDispatch();
  //const dispatch = store.dispatch;
  useEffect(() => {
    console.log(1, fetchTodosByUserId(1));
    dispatch(dragStart(todos[0]))//.then((x) => console.log(6, x));
  }, []);

  const renderColumn = (completed) => {
    const columnStatusClassName = completed ? "todos-column__completed" : "todos-column__not-completed";
    const columnTitle = completed ? "Completed" : "Not completed";
    const filterCallback = (todo) => todo.completed === completed;
    return (
      <div
        className={`todos-column ${columnStatusClassName}`}
        onDrop={(e) => {
          e.preventDefault();
          dispatch(drop(e.target.className));
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <h2>{columnTitle}</h2>
        {todos.filter(filterCallback).map((todo, index) => (
          <div onDragStart={() => dispatch(dragStart(todo))} draggable={true} className="todo-card" key={index}>
            {todo.title}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="todos">
      {renderColumn(false)}
      {renderColumn(true)}
    </div>
  );
};
