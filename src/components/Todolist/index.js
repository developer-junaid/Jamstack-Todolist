import React, { useEffect, useState } from "react"

// Components
import Todo from "./Todo"
import TodoInput from "./TodoInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner"

// Todo List
const Todolist = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  // Get Data, display, create, edit, delete
  const loadTodos = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/getTodos")
      const todos = await res.json() // Get todos
      setTodos(todos)
      setLoading(false)
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
      {!loading ? (
        todos.map(task => (
          <Todo
            key={task._id}
            task={task}
            loading={loading}
            refreshTodos={loadTodos}
          />
        ))
      ) : (
        <div className="flex min-w-screen flex items-center justify-center h-50v flex-col">
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            className="align-middle ml-2 text-3xl"
          />
        </div>
      )}
    </div>
  )
}

export default Todolist
