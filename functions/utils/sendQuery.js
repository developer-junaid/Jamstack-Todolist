const axios = require("axios")
require("dotenv").config()

module.exports = async (query, variables) => {
  // Request
  const {
    data: { data, errors },
  } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query,
      variables,
    },
  })

  // If errors
  if (errors) {
    console.errors(errors)
    throw new Error("Something went wrong")
  }

  // Return
  return data
  // Request //
}
