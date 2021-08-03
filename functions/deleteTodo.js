const { DELETE_TODO } = require("./utils/todoQueries.js")
const sendQuery = require("./utils/sendQuery")

// Handler
exports.handler = async event => {
  // Check if method supported
  if (event.httpMethod !== "DELETE") {
    return {
      statusCode: 405,
      body: { err: "Method not supported" },
    }
  }

  // Get Info
  const { id } = JSON.parse(event.body)
  const variables = { id }

  // Try

  try {
    const { deleteLink: deletedLink } = await sendQuery(DELETE_TODO, variables)

    return {
      statusCode: 200,
      body: JSON.stringify(deletedLink),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Something went wrong" }),
    }
  }
}
