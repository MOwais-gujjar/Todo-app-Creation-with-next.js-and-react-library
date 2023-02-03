"use client";
import React, { use, useState } from "react";
export default function Todolist() {
  //Hooks
  const [todo, setTodo] = useState("");
  // Todo Array
  const [todos, todoSet] = useState([
    { todoText: "Zia Khan", completed: false },
    { todoText: "Daniyal", completed: false },
    { todoText: "Owais", completed: true },
  ]);
  // create new todo
  const onClickHandler = (oTodo: any) => {
    const newTodo = todos.map((nTodo) => {
      if (nTodo.todoText == oTodo.todoText) {
        nTodo.completed = !nTodo.completed;
      }
      return nTodo;
    });
    todoSet(newTodo);
  };
  //Add Data Function
  const newTodoItem = () => {
    const newItem = { todoText: todo, completed: false };
    const newItems = [...todos, newItem];
    todoSet(newItems);
  };
  //Delete Function
  const deleteTodo = (n: any) => {
    const newItems = todos.filter((todo) => {
      if (todo.todoText == n.todoText) {
        return false;
      }
      return true;
    });
    todoSet(newItems);
  };
  return (
    <>
      <h1>Wellcome to todo List Web Application </h1>
      {/* Input Data */}
      <input
        placeholder="add todo item"
        value={todo}
        onChange={(e: any) => {
          setTodo(e.target.value);
        }}
        style={{
          color: "black",
          borderRadius: "8px",
          fontSize: "20px",
          width: "200px",
          height: "30px",
          borderColor: "white",
          boxShadow: "inset",
        }}
      />
      {/* add Data Button */}
      <button onClick={newTodoItem}>Add Item </button>
        {/* todo List */}
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "red" : "blue",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              {/* Delete button */}
              <button
                onClick={() => {
                  deleteTodo(elm);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
