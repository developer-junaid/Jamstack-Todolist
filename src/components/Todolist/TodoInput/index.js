import React from "react"

// Formik
import { Formik } from "formik"

// Component
const TodoInput = () => {
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
      onSubmit={(values, { setSubmitting }) => {
        console.log("values", values)
        setSubmitting(false)
        // Post Data
        // fetch(`/.netlify/functions/add_message`, {
        //   method: "POST",
        //   body: JSON.stringify(values),
        // })
        //   .then(res => res.json())
        //   .then(result => {
        //     console.log("success", result)
        //     setSubmitting(false)
        //   })
        //   .catch(err => {
        //     console.log(err)
        //   })
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
          className="bg-white flex justify-between items-center shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
        >
          <input
            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="task"
            type="text"
            name="task"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Task"
          />
          {errors.message && touched.message && errors.message}

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding.." : "Add"}
          </button>
        </form>
      )}
    </Formik>
  )
}

export default TodoInput
