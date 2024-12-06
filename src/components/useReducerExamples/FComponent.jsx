import React, { useContext } from 'react'
import { CountContext } from '../../App3'

const FComponent = () => {
    const countContext = useContext(CountContext)
  return (
    <div>
        F Component: {countContext.countState}
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default FComponent