"use client";
import React, { use, useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState("");
  const [todos, todoSet] = useState([
    { todoText: "Zia Khan", completed: false },
    { todoText: "Daniyal", completed: false },
    { todoText: "Owais", completed: true },
  ]);
  const onClickHandler = (oTodo: any) => {
    // create new todo
    console.log("Todo: ", oTodo);

    const newTodo = todos.map((nTodo) => {
      if (nTodo.todoText == oTodo.todoText) {
        nTodo.completed = !nTodo.completed;
      }
      return nTodo;
    });
    todoSet(newTodo);
  };
  const newTodoItem = () => {
    const newItem = { todoText: todo, completed: false };
    const newItems = [...todos, newItem];
    todoSet(newItems);
  };
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
      <button onClick={newTodoItem}>Add Item </button>
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
