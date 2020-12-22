import React , {useState, useEffect} from 'react'
import ToDoList from './components/ToDoList'
import { useDispatch } from 'react-redux'
import { initialState } from './reducers/todoReducer'
import ToDoForm from './components/ToDoForm'




const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initialState())
  }, [dispatch])

  
  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoForm/>
      <ToDoList/>
    </div>
  );
}

export default App
