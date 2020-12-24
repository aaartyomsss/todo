import todoServices from '../services/promises'

const todoReducer = (state = [], action) => {
    switch(action.type){
        case 'INIT':
            return action.data
        case 'ADD':
            return [...state].concat(action.data)
        case 'COMPLETE':
            return [...state].filter(todo => todo.id !== action.data.id)
        case 'CHANGE_IMPORTANCE':
            const id = action.data.id
            console.log(id)
            const todoToChange = state.find(n => n.id === id)
            console.log(todoToChange)
            const changedTodo = { 
                ...todoToChange, 
                important: !todoToChange.important 
            }
            return state.map(todo => todo.id !== action.data.id ? todo : changedTodo)
        default:
            return state
    }
}

export const initialState = () => {
    return async dispatch => {
        const todos = await todoServices.getAll()
        dispatch({
            type: 'INIT',
            data: todos
        })
    }
}

export const completeTodo = (id) => {
    return async dispatch => { // eslint-disable-next-line
        const todo = await todoServices.deleteTodo(id) 
        dispatch({
            type: 'COMPLETE',
            data: { id }
        })
    }
}

export const changeImportance = (id, newTodo) => {
    return async dispatch => {
        // eslint-disable-next-line
        const todo = await todoServices.updateTodo(id, newTodo)
        dispatch({
            type: 'CHANGE_IMPORTANCE',
            data: { id }
        })
    }
}

export const addTodo = (obj) => {
    return async dispatch => {
        const todo = await todoServices.addTodo(obj)
        dispatch({
            type: 'ADD',
            data: todo
        })
    }
}

export default todoReducer