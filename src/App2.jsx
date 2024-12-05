import React from 'react'
// import HookCounter from "./components/HookCounter"
import ComponentC from "./components/useContextExamples/ComponentC"
import EffectDataFetching from "./components/useEffectExamples/EffectDataFetching"
import EffectDataFetching3 from "./components/useEffectExamples/EffectDataFetching3"
import EffectHookCounterOne from "./components/useEffectExamples/EffectHookCounterOne"
import EffectHookMouse from "./components/useEffectExamples/EffectHookMouse"
import HookCounterFour from "./components/useStateExamples/HookCounterFour"
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