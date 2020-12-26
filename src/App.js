import React , { useEffect } from 'react'
import ToDoList from './components/ToDoList'
import { useDispatch, useSelector } from 'react-redux'
import { initialState } from './reducers/todoReducer'
import ToDoForm from './components/ToDoForm'
import "antd/dist/antd.css"
import { PageHeader } from 'antd'
import './Styles.css'
import Home from './components/Home'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log(user)
  
  useEffect(() => {
    dispatch(initialState())
  }, [dispatch])

  
  return (
    <div>
      {user === '' 
        ? <Home/> 
        : <div>
            <PageHeader title='Todo List' subTitle='Created by AS 2020 UH'/>
            <ToDoForm/>
            <ToDoList/>
          </div>}
    </div>
  );
}

export default App
