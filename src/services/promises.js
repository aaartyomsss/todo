import axios from 'axios'
const todoUrl = 'http://localhost:3001/todos'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const res = await axios.get(todoUrl)
    return res.data
}

const addTodo = async newTodo => {

    const config = {
        headers: { Authorization: token }
    }

    const res = await axios.post(todoUrl, newTodo, config)
    return res.data
}

const deleteTodo = async id => {

    const config = {
        headers: { Authorization: token }
    }

    const res = await axios.delete(`${todoUrl}/${id}`, config)
    return res.data
}

const updateTodo = async (id, newTodo) => {
    const res = await axios.patch(`${todoUrl}/${id}`, newTodo)
    return res.data
}

export default { getAll, addTodo, deleteTodo, updateTodo, setToken }
