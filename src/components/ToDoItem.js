import React from 'react'

const ToDoItem  = ({todoName, completeToDo, i, changeImportance, important}) => {
    
        return (
        <div>
            <li style={{color: important ? 'red' : 'green'}}>{todoName}<button onClick={() => completeToDo(i)}>Done!</button><button onClick={() => changeImportance(i)}>{important ? 'Regular' : 'Important!'}</button></li>
        </div>)
    
}

export default ToDoItem