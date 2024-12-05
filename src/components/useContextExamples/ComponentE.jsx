import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../../App2'

const ComponentE = () => {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        {user} - {channel}
    </div>
  )
}

export default ComponentE