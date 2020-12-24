import React , { useEffect } from 'react'
import ToDoList from './components/ToDoList'
import { useDispatch } from 'react-redux'
import { initialState } from './reducers/todoReducer'
import ToDoForm from './components/ToDoForm'
import "antd/dist/antd.css"
import { PageHeader } from 'antd'
import './Styles.css'




const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initialState())
  }, [dispatch])

  
  return (
    <div>
      <PageHeader className='site-page-header' title='Todo List' subTitle='Created by AS 2020 UH'/>
      <ToDoForm/>
      <ToDoList/>
    </div>
  );
}

export default App
