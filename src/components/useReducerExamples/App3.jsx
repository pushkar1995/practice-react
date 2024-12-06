import React, { useReducer } from 'react'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import CounterThree from './CounterThree'
import AComponent from './AComponent'
import BComponent from './BComponent'
import CComponent from './CComponent'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const App = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <div>
            Count - {count}
            <AComponent />
            <BComponent />
            <CComponent />
        </div>
    </CountContext.Provider>
  )
}

export default App 