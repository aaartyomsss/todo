import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../reducers/todoReducer'
import { Form, Input, Button } from 'antd'
import { formatCountdown } from 'antd/lib/statistic/utils'
import { useForm } from 'antd/lib/form/Form'

const ToDoForm = () => {
    const [form] = useForm()

    const dispatch = useDispatch()

    const addToDo = (value) => {
        console.log(value)
        const todoText = value.todo
        const todo = {
            todo: todoText,
            done: false,
        }
        dispatch(addTodo(todo))
        form.resetFields()
    }

    return (
        <div style={{margin: 10}}>
            <Form form={form} onFinish={addToDo}>
                <Form.Item name='todo'>
                    <Input placeholder={"Enter todo"}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Add Todo</Button>
                </Form.Item>
            </Form>
        </div>

    )
}

export default ToDoForm