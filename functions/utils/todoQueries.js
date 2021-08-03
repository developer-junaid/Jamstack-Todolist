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

module.exports = {
  GET_TODOS,
}
