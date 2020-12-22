import todoReducer from './reducers/todoReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
