import React, {useState} from 'react'
import useCounter from '../customHookExamples/hooks/useCounter'

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(10, 10)
  return (
    <div>
        <div>Count = {count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne