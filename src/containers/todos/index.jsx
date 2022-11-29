import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dragStart, drop, fetchTodosByUserId, selectTodos } from "../../slices/todos";
import store from "../../store";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(fetchTodosByUserId(1));
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
          dispatch(drop(completed));
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
  };
  return (
    <div className="todos">
      {renderColumn(false)}
      {renderColumn(true)}
    </div>
  );
};
