import React from 'react'

const ToDoItem  = ({todoName}) => {
    return (
        <div>
            <label><input type="checkbox"/>{todoName}</label>
        </div>
    )
}

export default ToDoItem