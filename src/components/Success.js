import { Result, Button } from 'antd'
import React from 'react'

const Success = ({ btnText, title, subtitle, handleClick }) => {


    return (
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

    )
}

export default Success