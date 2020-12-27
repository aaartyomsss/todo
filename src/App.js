import React, { useEffect, useState } from 'react'
import ToDoList from './components/ToDoList'
import { useDispatch } from 'react-redux'
import { initialState } from './reducers/todoReducer'
import ToDoForm from './components/ToDoForm'
import "antd/dist/antd.css"
import { Button, PageHeader } from 'antd'
import './Styles.css'
import Home from './components/Home'
import { Redirect, Route, useHistory, Switch } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      console.log(loggedUserJSON)
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      history.push('/todos')
    } else {
      history.push('/')
    }
  }, [history])

  useEffect(() => {
    if (user) {
      console.log(user.todos)
      dispatch(initialState(user.todos))
    }
  }, [dispatch, user])

  const handleLogOut = () => {
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
    history.push('/')
  }


  return (
    <div>
      <Switch>
        <Route path='/todos'>
          {user ? <div>
            <PageHeader title='Todo List' subTitle='Created by AS 2020 UH'
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
