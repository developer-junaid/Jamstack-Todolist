import React, { useState, useRef } from "react"

// icons
import deleteIcon from "./../../../../static/garbage-can.svg"
import editIcon from "./../../../../static/pencil.svg"
import doneIcon from "./../../../../static/done.svg"

// Todo
const Todo = ({ task, refreshTodos }) => {
  const [editing, setEditing] = useState(false)
  const [taskToUpdate, setTaskToUpdate] = useState(task)
  const inputEl = useRef(null)

  // Handlers
  const handleChange = e => {
    setTaskToUpdate({ ...task, text: e.target.value })
  }

  const handleEdit = () => {
    setEditing(true)
    inputEl.current.focus() // Focus the input field
  }

  // Functions
  const updateTodo = async () => {
    try {
      await fetch("/api/updateTodo", {
        method: "PUT",
        body: JSON.stringify(taskToUpdate),
      })
      setEditing(false)
    } catch (error) {
      console.error("Error occured: ", error)
    }
  }

  const deleteTodo = async () => {
    const id = task._id

    try {
      await fetch("/api/deleteTodo", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      })
      refreshTodos()
    } catch (error) {
      console.error("Error occured: ", error)
    }
  }

  // Sub Components
  const editButton = editing ? (
    <a
      onClick={updateTodo}
      className="text-indigo-600 text-base p-1 hover:text-indigo-900 cursor-pointer"
    >
      <img src={doneIcon} alt="done" className="min-w-5 h-5 inline" />
    </a>
  ) : (
    <a
      onClick={handleEdit}
      className="text-indigo-600 text-base p-1 hover:text-indigo-900 cursor-pointer"
    >
      <img src={editIcon} alt="edit" className="min-w-5 h-5 inline" />{" "}
    </a>
  )

  const todoText = editing ? (
    <input
      className="text-sm text w-full px-2 ml-2 font-medium  focus:ring focus:border-blue-300 overflow-scroll  font-medium outline-none text-gray-900"
      value={taskToUpdate.text}
      onChange={handleChange}
      ref={inputEl}
    />
  ) : (
    <input
      className="text-sm px-2 w-full  ml-2 font-mediumcursor-default font-medium overflow-scroll overflow-scroll  outline-none text-gray-900"
      value={taskToUpdate.text}
      onChange={handleChange}
      readOnly
      ref={inputEl}
    />
  )

  // Return
  return (
    <div className="flex flex-col">
      <div className="-my-2 flex align-center sm:-mx-6 lg:-mx-8 ">
        <div className="py-2 align-middle inline-block lg:w-2/3 mx-auto  w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden  border-b border-gray-200 sm:rounded-lg">
            <div className="min-w-5/6  divide-y divide-gray-200">
              <div className="bg-white divide-y divide-gray-200">
                {/* Container */}
                <div className="px-2 min-w-full py-4 flex justify-between align-center ">
                  {/* Input */}
                  {/* <div className="flex-row min-w-1/3 w-1/3 border-2 border-black inline-block items-center"> */}
                  {/* <div className="ml-4 font-medium text-lg "></div> */}
                  {/* </div> */}
                  {todoText}
                  {/* Buttons */}
                  <div className="inline-block flex justify-end items-center min-w-48 w-36 ">
                    {editButton}
                    <a
                      onClick={deleteTodo}
                      className="text-indigo-600 p-2 hover:text-indigo-900 ml-2 cursor-pointer"
                    >
                      <img
                        src={deleteIcon}
                        alt="delete"
                        className="min-w-5 h-5 inline"
                      />
                    </a>
                  </div>

                  {/* <div className="px-3 min-w-1/3 inline-block border-2 border-green-800 py-4  flex items-center justify-end text-right text-sm font-medium">
                   
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
