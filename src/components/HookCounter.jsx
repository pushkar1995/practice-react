import { useState }  from 'react'

const HookCounter = () => {
    //Array Destructuring, useState takes initial value of the state which is 0 
    // in this case and returns pair of values which is count and setCount in this case
    const [count, setCount] = useState(0)
  return (
    <div>
        {/* onClick is function call so we used Arrow Function!  */}
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter