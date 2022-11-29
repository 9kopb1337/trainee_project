import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dragStart, drop, fetchTodosByUserId, selectTodos } from "../../slices/todos";
import { selectUserId } from "../../slices/users";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const userId = useSelector(selectUserId);

  useEffect(() => {
    dispatch(fetchTodosByUserId(userId));
  }, [userId]);

  const renderColumn = (completed) => {
    const columnStatusClassName = completed ? "todos-column__completed" : "todos-column__not-completed";
    const columnTitle = completed ? "Completed" : "Not completed";
    const filteredTodos = todos.filter((todo) => todo.completed === completed);
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
        {filteredTodos.length ? (
          filteredTodos.map((todo, index) => (
            <div onDragStart={() => dispatch(dragStart(todo))} draggable={true} className="todo-card" key={index}>
              {todo.title}
            </div>
          ))
        ) : (
          <div>No tasks</div>
        )}
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
