import React from "react"

const TodoInput = () => {
  return (
    <form
      onSubmit={() => alert("Submitted")}
      className="bg-white flex justify-between items-center shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
    >
      <input
        className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Task"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Add
      </button>
    </form>
  )
}

export default TodoInput
