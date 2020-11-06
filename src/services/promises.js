import axios from 'axios'
const todoUrl = 'http://localhost:3001/todos'


const getAll = () => {
    const req = axios.get(todoUrl)
    return req.then(res => res.data)
}

const addTodo = newTodo => {
    const req = axios.put(todoUrl, newTodo)
    return req.then(res => res.data)
}

const deleteTodo = id => {
    return axios.delete(`${todoUrl}/${id}`)
}

const updateTodo = (id, newTodo) => {
    return axios.patch(`${todoUrl}/${id}`, newTodo)
}

export default {getAll, addTodo, deleteTodo, updateTodo}
