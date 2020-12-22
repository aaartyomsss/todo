import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../reducers/todoReducer'
const ToDoForm = () => {
    
    const dispatch = useDispatch()

    const addToDo = (event) => {
        event.preventDefault()
        const todoText = event.target.todo.value
        const todo = {
          todo: todoText,
          done: false, 
        }
        dispatch(addTodo(todo))
        event.target.todo.value = ''
    }
    
    return (
        <div>
            <form onSubmit={addToDo}>
                <input name="todo"/>
                <button type="submit">Add ToDo</button>
            </form>
        </div>

    )
}

export default ToDoForm