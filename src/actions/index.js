const ADD_TODO = 'ADD_TODO'

export const addTodo = (input)=>({
    type:ADD_TODO,
    message:input,
    id:Math.random()
})

const REMOVE_TODO = 'REMOVE_TODO'

export const removeTodo = (id)=>({
    type:REMOVE_TODO,
    id:id
})