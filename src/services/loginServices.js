import axios from 'axios'
const loginUrl = 'http://localhost:3001/login'

const login = async (creds) => {
    const response = await axios.post(loginUrl, creds)
    return response.data
}

export default { login }