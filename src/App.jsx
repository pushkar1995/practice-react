import React, { useReducer } from 'react'
import CounterOne from './components/useReducerExamples/CounterOne'
import CounterTwo from './components/useReducerExamples/CounterTwo'
import CounterThree from './components/useReducerExamples/CounterThree'
import AComponent from './components/useReducerExamples/AComponent'
import BComponent from './components/useReducerExamples/BComponent'
import CComponent from './components/useReducerExamples/CComponent'

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