import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../reducers/todoReducer'
import { Form, Input, Button } from 'antd'

const ToDoForm = () => {

    const dispatch = useDispatch()

    const addToDo = (value) => {
        console.log(value)
        const todoText = value.todo
        const todo = {
            todo: todoText,
            done: false,
        }
        dispatch(addTodo(todo))
        value = ''
    }

    const layout = {
        labelCol: {
            span: 2,
        },
        wrapperCol: {
            span: 14,
        },
    }

    const tailLayout = {
        wrapperCol: {
            offset: 2,
            span: 14,
        },
    }

    return (
        <div>
            <Form onFinish={addToDo} {...layout}>
                <Form.Item label='Enter todo' name='todo'>
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Add Todo</Button>
                </Form.Item>
            </Form>
        </div>

    )
}

export default ToDoForm