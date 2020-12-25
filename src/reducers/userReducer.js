import loginServices from '../services/loginServices'
const loggedInUser = window.localStorage.getItem('loggedInUser') || ''

const userReducer = (state = loggedInUser, action) => {
    switch(action.type){
        case 'LOGIN':
            console.log(action.data)
            break
        default:
            return state
    }


}

export const login = (creds) => {
    return async dispatch => {
        const user = loginServices.login(creds)
        dispatch({
            type: 'LOGIN',
            data: user
        })
    }
}

export default userReducer