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

const UPDATE_TODO = `
    mutation($id: ID!, $text:String!){
        updateTodo(id: $id, data: {text: $text}){
            _id
            text
        }
    }
`

const DELETE_TODO = `
mutation($id: ID!){
    deleteTodo(id: $id){
        _id
    }
}
`

module.exports = {
  GET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
}
