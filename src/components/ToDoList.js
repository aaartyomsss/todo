import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToDoItem from './ToDoItem'
import { completeTodo, changeImportance } from '../reducers/todoReducer'
import { Row } from 'antd'
import { AnimateGroup } from 'react-animation'

const ToDoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state)
    console.log(todos)
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
            i={i}
            changeImportance={() => handleImportance(item.id)}
            completeToDo={() => dispatch(completeTodo(item.id))
            }
        />
    )


    return (
        <div>
            <Row gutter={[8, 16]}>
                    {arrayOfItems}
            </Row>
        </div>
    )
}

export default ToDoList