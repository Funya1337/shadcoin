import { Flex, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import React from 'react'

const NavMenu = () => {
    const navigate = useNavigate()

    const gotToNewPage = (url) => {
        navigate(url);
    }

    return (
        <div>
            <Flex gap='small' justify='flex-start' align='flex-end'>
                <Button onClick={() => gotToNewPage('/')} type="primary">Farm</Button>
                <Button onClick={() => gotToNewPage('/boost')} type="primary">Boost</Button>
                <Button onClick={() => gotToNewPage('/friends')} type="primary">Friends</Button>
                <Button onClick={() => gotToNewPage('/earn')} type="primary">Earn</Button>
            </Flex>
        </div>
  )
}

export default NavMenu