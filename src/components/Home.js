import React, { useState, useEffect } from 'react'
import SignUp from './SignUp'
import { Route, Switch, Link, useHistory } from 'react-router-dom'
import { Button, Typography, Divider, Row, Col } from 'antd'
import Success from './Success'
import Login from './Login'



const Home = ({ setUser }) => {

    const history = useHistory()

    const [ show, setShow ] = useState(true)

    useEffect(() => {
        setShow(true)
    }, [])

    const { Title } = Typography;

    window.addEventListener('popstate', (event) => {
        setShow(true)
    })

    const centerContainer = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)', 
        border: '1px solid black',
        textAlign: 'center',
        padding: '4em',
        display: show ? '' : 'none'
    }

    const buttons = {
        padding: 'auto'
    }

    return (
        <div>
            <div style={centerContainer}>
                <Title>ToDo</Title>

                <Title level={4} type='secondary'>Minimalistic. Simple. Effective</Title>

                <Title level={5} type='secondary'>Register or login to begin</Title>

                <Divider/>

                <div style={buttons}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Link to='/registration'><Button type='primary' onClick={() => setShow(!show)}>Register</Button></Link>
                        </Col>

                        <Col span={12}>
                            <Link to='/login'><Button type='primary' onClick={() => setShow(!show)}>Login</Button></Link>
                        </Col>
                    </Row>
                </div>
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
                    btnText='Login'
                    handleClick={() => history.push('/login')}
                    />
                </Route>
            </Switch>
        </div>
    )
}

export default Home