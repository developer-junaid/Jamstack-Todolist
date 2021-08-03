const { GET_TODOS } = require("./utils/todoQueries.js")
const sendQuery = require("./utils/sendQuery")

// Handler
exports.handler = async event => {
  try {
    const res = await sendQuery(GET_TODOS)
    const data = res.allTodos.data

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Something went wrong" }),
    }
  }
}
