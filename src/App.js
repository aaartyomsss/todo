import React, { useEffect, useState } from 'react'
import ToDoList from './components/ToDoList'
import { useDispatch } from 'react-redux'
import { initialState, resetState } from './reducers/todoReducer'
import ToDoForm from './components/ToDoForm'
import "antd/dist/antd.css"
import { Button, PageHeader } from 'antd'
import './Styles.css'
import Home from './components/Home'
import { Redirect, Route, useHistory, Switch } from 'react-router-dom'
import todoServices from './services/promises'

const App = () => {
  const [user, setUser] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()


  //FIX FETCHING TODOS
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      console.log(loggedUserJSON)
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      console.log(user.id)
      console.log(user.todos)
      todoServices.setToken(user.token)
      const fetchData = async (userid) => {
        const allTodos = await todoServices.getAll()
        dispatch(initialState(allTodos, userid))
      }
      fetchData(user.id)
      history.push('/todos')
    } else {
      history.push('/')
    }
  }, [history, dispatch])

  const handleLogOut = () => {
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
    dispatch(resetState())
    history.push('/')
  }


  return (
    <div>
      <Switch>
        <Route path='/todos'>
          {user ? <div>
            <PageHeader title='Todo List' subTitle={`Welcome ${user.name}`}
              extra={[
                <Button type='primary' onClick={handleLogOut}>Log out</Button>
              ]}
            />
            <ToDoForm />
            <ToDoList />
          </div>
            : <Redirect to='/' />
          }
        </Route>

        <Route path='/'>
          {user ? <Redirect to='todos' />
            : <Home setUser={setUser} />
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App
