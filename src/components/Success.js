import { Result, Button } from 'antd'
import React from 'react'

const Success = ({ btnText, title, subtitle, handleClick }) => {

    const centerDiv = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }

    return (
        <div style={centerDiv}>
        <Result 
        status='success'
        title={title}
        subTitle={subtitle}
        extra={
            <Button type='primary' onClick={handleClick}>
                {btnText}
            </Button>
        }
        />
        </div>

    )
}

export default Success