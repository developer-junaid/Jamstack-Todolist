import React, { useEffect, useState } from "react"

// Components
import Todo from "./Todo"
import TodoInput from "./TodoInput"

// Todo List
const Todolist = () => {
  const [todos, setTodos] = useState([])

  // Get Data, display, create, edit, delete
  const loadTodos = async () => {
    try {
      const res = await fetch("/api/getTodos")
      const todos = await res.json() // Get todos
      setTodos(todos)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadTodos()
  }, [])

  // Return
  return (
    <div className="container mx-auto px-4 font-sans text-white tracking-wide min-h-screen bg-blue-50 text-blue-500">
      <h1 className="text-4xl text-center mt-10 font-semibold">Todo List</h1>
      <TodoInput refreshTodos={loadTodos} />
      {todos.map(task => (
        <Todo key={task._id} task={task} refreshTodos={loadTodos} />
      ))}
    </div>
  )
}

export default Todolist
