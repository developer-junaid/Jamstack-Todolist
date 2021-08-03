const { UPDATE_TODO } = require("./utils/todoQueries.js")
const sendQuery = require("./utils/sendQuery")

// Handler
exports.handler = async event => {
  // Check if method supported
  if (event.httpMethod !== "PUT") {
    return {
      statusCode: 405,
      body: { err: "Method not supported" },
    }
  }

  // Get Info
  const { text, _id: id } = JSON.parse(event.body)
  const variables = { text, id }

  // Try

  try {
    const { updateTodo: updatedTodo } = await sendQuery(UPDATE_TODO, variables)

    return {
      statusCode: 200,
      body: JSON.stringify(updatedTodo),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Something went wrong" }),
    }
  }
}
