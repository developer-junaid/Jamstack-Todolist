const { CREATE_TODO } = require("./utils/todoQueries.js")
const sendQuery = require("./utils/sendQuery")

// Handler
exports.handler = async event => {
  // Get Info
  const { text } = JSON.parse(event.body)
  const variables = { text }
  console.log("text", text)

  // Try

  try {
    const { createTodo: createdTodo } = await sendQuery(CREATE_TODO, variables)

    return {
      statusCode: 200,
      body: JSON.stringify(createdTodo),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Something went wrong" }),
    }
  }
}
