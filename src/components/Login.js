import React from 'react'
import { Form, Button, Input, Checkbox, message } from 'antd'
import loginServices from '../services/loginServices'
import todoServices from '../services/promises'
import { useDispatch } from 'react-redux'
import { initialState } from '../reducers/todoReducer'
import { animations } from 'react-animation'

const Login = ({ setUser }) => {

    const dispatch = useDispatch()

    const handleLogin = async (value) => {
        const credentials = {
            username: value.username,
            password: value.password
        }
        try {
            const user = await loginServices.login(credentials)
            setUser(user)
            todoServices.setToken(user.token)
            const fetchData = async (userid) => {
                const allTodos = await todoServices.getAll()
                dispatch(initialState(allTodos, userid))
            }
            fetchData(user.id)
            window.localStorage.setItem('loggedInUser', JSON.stringify(user))
        } catch (e) {
            if (e.message === 'Request failed with status code 401') {
                message.error('Incorrect username or password')
            }
        }
    }

    //Form styles
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    }

    const tailLayout = {
        wrapperCol: {
            offset: 6,
            span: 14,
        }
    }

    const divStyle = {
        border: "1px solid black",
        width: "50%",
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        paddingTop: '2em',
        borderRadius: '15px',
        animation: animations.fadeIn,
    }


    return (
        <div style={divStyle}>
            <Form
                name='login'
                initialValues={{ remember: true }}
                onFinish={handleLogin}
                {...layout}
            >
                <Form.Item
                    name='username'
                    label='Username'
                    rules={[{ required: true, message: 'Please enter your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='password'
                    label='Password'
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" {...tailLayout}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button htmlType="submit" type='primary'>Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login