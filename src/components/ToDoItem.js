import React from 'react'
import { Button, Card, Col, Row, Typography } from 'antd'

const ToDoItem = ({ todoName, completeToDo, changeImportance, important }) => {

    const { Text } = Typography

    return (
        <Col span={6}>
        <Card title={<Text type={important ? "danger" : null}>{todoName}</Text>}>
            <div style={{textAlign: 'center'}}>
            <Row gutter={16}>
                <Col span={12}>
                    <Button type='primary' onClick={completeToDo}>Done!</Button>
                </Col>
                <Col span={12}>
                    <Button type='default' onClick={changeImportance} danger>{important ? 'Regular' : 'Important!'}</Button>
                </Col>
            </Row>
            </div>
        </Card>
        </Col>
        )

}

export default ToDoItem