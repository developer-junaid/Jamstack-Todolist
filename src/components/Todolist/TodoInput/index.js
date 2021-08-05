import React, { useState } from "react"

// Formik
import { Formik } from "formik"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner"

// Component
const TodoInput = ({ refreshTodos }) => {
  return (
    <Formik
      initialValues={{ task: "" }}
      validate={values => {
        const errors = {}
        if (!values.task) {
          errors.message = "Required"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const text = values.task

        // Post Data
        fetch(`/api/createTodo`, {
          method: "POST",
          body: JSON.stringify({ text }),
        })
          .then(res => res.json())
          .then(result => {
            setSubmitting(false)
            resetForm({ values: "" })
            refreshTodos()
          })
          .catch(err => {
            console.log(err)
          })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="bg-white flex justify-between items-center lg:w-4/5 mx-auto shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
        >
          <input
            className="shadow appearance-none border rounded  w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="task"
            type="text"
            name="task"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Task"
            value={values.task || ""}
          />
          {errors.message && touched.message && errors.message}

          <button
            className="bg-blue-500 md:w-1/5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <FontAwesomeIcon className="mr-2" icon={faSpinner} spin />
            )}

            {isSubmitting ? "Adding.." : "Add"}
          </button>
        </form>
      )}
    </Formik>
  )
}

export default TodoInput
