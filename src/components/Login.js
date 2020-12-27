import React from 'react'
import { Form, Button, Input, Checkbox, message } from 'antd'
import loginServices from '../services/loginServices'

const Login = ({ setUser }) => {

    const handleLogin = async (value) => {
        const credentials = {
            username: value.username,
            password: value.password
        }
        try {
            const user = await loginServices.login(credentials)
            setUser(user)
            window.localStorage.setItem('loggedInUser', JSON.stringify(user))
        } catch (e) {
            if (e.message === 'Request failed with status code 401'){
                message.error('Incorrect username or password')
            }
        }
    }

    return (
        <div>
            <Form
            name='login'
            initialValues={ { remember: true } }
            onFinish={handleLogin}
            >
                <Form.Item
                name='username'
                label='Username'
                rules={[{ required: true, message: 'Please enter your username!' }]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                name='password'
                label='Password'
                rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" type='primary'>Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login