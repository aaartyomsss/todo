import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import loginServices from '../services/loginServices'

const SignUp = () => {


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
        borderRadius: '15px'
    }

    const [form] = useForm()

    const registerUser = async (value) => {

        if (value.password !== value.passwordCheck) {
            message.error('Passwords do not match!')
            return console.error("Passwords do not match")
        }

        const newUser = {
            username: value.username,
            name: value.name,
            email: value.email,
            password: value.password
        }
        try {
            const response = await loginServices.register(newUser)
            console.log(response)
            form.resetFields()
        } catch (e) {
            console.log(e.message)
            if (e.message === `Request failed with status code 400`) {
                message.error('Following username is already taken')
            } else {
                message.error('Following email is already taken')
            }
        }

    }

    return (
        <div style={divStyle}>
            <Form onFinish={registerUser} form={form} {...layout}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Full name"
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            min: 6,
                            message: 'Please enter your password',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm password"
                    name="passwordCheck"
                    rules={[
                        {
                            required: true,
                            min: 6,
                            message: 'Please confirm your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item name="button" {...tailLayout}>
                    <Button type="primary" htmlType="submit">Register !</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignUp