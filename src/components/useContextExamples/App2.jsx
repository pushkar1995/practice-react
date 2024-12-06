import React from 'react'
// import HookCounter from "./components/HookCounter"
import ComponentC from "./ComponentC"
import EffectDataFetching from "../useEffectExamples/EffectDataFetching"
import EffectDataFetching3 from "../useEffectExamples/EffectDataFetching3"
import EffectHookCounterOne from "../useEffectExamples/EffectHookCounterOne"
import EffectHookMouse from "../useEffectExamples/EffectHookMouse"
import HookCounterFour from "../useStateExamples/HookCounterFour"
// import HookCounterThree from "./components/HookCounterThree"
// import HookCounterTwo from "./components/HookCounterTwo"

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const App = () => {
  return (
    <div>
      <UserContext.Provider value={'Puskar'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App 