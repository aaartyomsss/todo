import axios from 'axios'
const loginUrl = 'http://localhost:3001/login'
const usersUrl = 'http://localhost:3001/users'

const login = async (creds) => {
    const response = await axios.post(loginUrl, creds)
    return response.data
}

const register = async (user) => {
    const res = await axios.post(usersUrl, user)
    console.log(res)
    return res
}

export default { login, register }