import { createContext, useContext, useState    } from "react";

const TodoContext = createContext();

import React from 'react'

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => setTodos([...todos, { id: Date.now(), text, done: false}]);
  const toggleTodo = (id) => setTodos(todos.map(t => t.id === id ? {...t, done: !t.done} : t));
  const deleteTodo = (id) => setTodos(todos.filter(t => t.id !== id));
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
    {children}
    </TodoContext.Provider>    
  )
}

export const useTodos = () => useContext(TodoContext);