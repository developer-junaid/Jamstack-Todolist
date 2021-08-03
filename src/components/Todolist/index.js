import React from "react"

// Components
import Todo from "./Todo"
import TodoInput from "./TodoInput"

// Todo List
const Todolist = () => {
  return (
    <div className="container mx-auto px-4 border-black font-sans border-2 text-white tracking-wide min-h-screen bg-blue-50 text-blue-400">
      <h1 className="text-4xl text-center mt-10 font-semibold">Todo List</h1>
      <TodoInput />
      <Todo task={"This is my task to be saved"} />
      <Todo task={"This is my task to be saved"} />
      <Todo task={"This is my task to be saved"} />
    </div>
  )
}

export default Todolist
