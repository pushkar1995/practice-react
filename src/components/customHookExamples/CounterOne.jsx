import React, {useState} from 'react'

function CounterOne() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }
  return (
    <div>
        <div>Count = {count}</div>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default CounterOne