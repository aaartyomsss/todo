import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import ToDoItem from './ToDoItem'
import { completeTodo, changeImportance } from '../reducers/todoReducer'

const ToDoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state)

    //TODO fix this!!!!
    const handleImportance = (id) => {
        const todoToChange = todos.find(n => n.id === id)
        const changedTodo = { 
            ...todoToChange, 
            important: !todoToChange.important 
        }
        dispatch(changeImportance(id, changedTodo))
    }

    const arrayOfItems = todos.map((item, i) => 
    <ToDoItem 
        todoName={item.todo} 
        key={i} 
        important={item.important} 
        id={item.id} 
        i ={i} 
        changeImportance={() => handleImportance(item.id)}
        completeToDo={() => dispatch(completeTodo(item.id))
        }
    />
    )
    
    
    return (
        <div>
            <ul>
                {arrayOfItems}
            </ul>
        </div>
    )
}

export default ToDoList