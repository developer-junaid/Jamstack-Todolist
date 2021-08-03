const faunadb = require("faunadb")
const { query } = faunadb

// FaunaDB Details
// Database = todoDB
// Collection = todos
// Secret fnAEPqwqnqACQXZAhvXkQKeZURgkvygaYK8LKsBE

const handler = async event => {
  // Logic

  // If method is not POST don't allow
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  // Recieve Request (Recieve Todo)
  const todoBody = JSON.parse(event.body) // Get Data
  const { todo } = todoBody // Destructure body
  console.log(todoBody) // Print

  // Fauna
  const secret = "fnAEPqwqnqACQXZAhvXkQKeZURgkvygaYK8LKsBE"
  let adminClient = new faunadb.Client({ secret: secret }) // Initialize with secret
  let collection = "todos"

  const result = await adminClient.query(
    // Queries (FQL)

    // Add todo to DB
    query.Create(query.Collection(collection), { data: { detail: todo } })

    // Queries //
  )

  // Fauna //

  // Logic //

  // Return
  try {
    return {
      statusCode: 200, // Success
      body: JSON.stringify({ todo: result.ref.id }), // Return Id on success
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() } // Return Error
  }
  // Return //
}

module.exports = { handler }
