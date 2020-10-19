import React from 'react'

const ToDoInput = ({value, handleChange}) => {
    return (
        <input value={value} onChange={handleChange}/>
    )
}

export default ToDoInput