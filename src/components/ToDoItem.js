import React from 'react'

const ToDoItem  = ({todoName, completeToDo, changeImportance, important}) => {
    
        return (
        <div>
            <li style={{color: important ? 'red' : 'green'}}>{todoName}<button onClick={completeToDo}>Done!</button><button onClick={changeImportance}>{important ? 'Regular' : 'Important!'}</button></li>
        </div>)
    
}

export default ToDoItem