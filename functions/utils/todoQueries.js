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

const CREATE_TODO = `
    mutation($text:String!){
        createTodo(data: {text: $text}){
            _id
            text
        }
    }
`

module.exports = {
  GET_TODOS,
  CREATE_TODO,
}
