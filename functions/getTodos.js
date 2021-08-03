const axios = require("axios")
require("dotenv").config()

// Handler
exports.handler = async event => {
  // Get Todos

  // Query
  const GET_TODOS = `
    query{
        allTodos{
            data{
                _id
                text 
            }
        }
    }`

  // Request
  const { data } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query: GET_TODOS,
      variables: {},
    },
  })

  console.log(data)

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
  // Request //
}
