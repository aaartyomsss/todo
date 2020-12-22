import axios from 'axios'
const todoUrl = 'http://localhost:3001/todos'


const getAll = async () => {
    const res = await axios.get(todoUrl)
    return res.data
}

const addTodo = async newTodo => {
    const res =  await axios.post(todoUrl, newTodo)
    return res.data
}

const deleteTodo = async id => {
    const res = await axios.delete(`${todoUrl}/${id}`)
    return res.data
}

const updateTodo = async (id, newTodo) => {
    const res = await axios.patch(`${todoUrl}/${id}`, newTodo)
    return res.data
}

export default {getAll, addTodo, deleteTodo, updateTodo}
