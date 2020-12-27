import React from 'react'
import SignUp from './SignUp'
import { Route, Switch, Link, useHistory } from 'react-router-dom'
import { Button } from 'antd'
import Success from './Success'
import Login from './Login'

const Home = ({ setUser }) => {

    const history = useHistory()

    return (
        <div>
            <h1>LOGIN OR SIGN UP!!!</h1>
            <div>
                <Link to='/registration'><Button type='primary' >Register</Button></Link>
                <Link to='/login'><Button type='primary' >Login</Button></Link>
            </div>

            <Switch>
                <Route path='/registration'>
                    <SignUp/>
                </Route>

                <Route path='/login'>
                    <Login setUser={setUser}/>
                </Route>

                <Route path='/success'>
                    <Success 
                    title='Registration complete'
                    subtitle='Click the button to proceed to login form'
                    btnText='login'
                    handleClick={() => history.push('/login')}
                    />
                </Route>
            </Switch>
        </div>
    )
}

export default Home