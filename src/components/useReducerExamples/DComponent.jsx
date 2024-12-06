import React, { useContext } from 'react'
import { CountContext } from '../../App'

const DComponent = () => {
    const countContext = useContext(CountContext)
  return (
    <div>
        D Component: {countContext.countState}
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default DComponent