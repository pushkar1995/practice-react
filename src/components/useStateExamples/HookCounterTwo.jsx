import { useState }  from 'react'

const HookCounterTwo = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => { 
        for(let i=0; i<5; i++) { 
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
        Count: {count}
        {/* Not a Good Practice if you need to change the state based upon the Previous State Value. So pass a function to as State Setter */}
        {/* <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setCount(count - 1)}>Decrement Count</button> */}

        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement Count</button> 
        <button onClick={() => setCount(initialCount)}>Reset Count</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo