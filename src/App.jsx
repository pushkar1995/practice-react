// import HookCounter from "./components/HookCounter"
import EffectDataFetching from "./components/useEffectExamples/EffectDataFetching"
import EffectHookCounterOne from "./components/useEffectExamples/EffectHookCounterOne"
import EffectHookMouse from "./components/useEffectExamples/EffectHookMouse"
import HookCounterFour from "./components/useStateExamples/HookCounterFour"
// import HookCounterThree from "./components/HookCounterThree"
// import HookCounterTwo from "./components/HookCounterTwo"

const App = () => {
  return (
    <div>
        <EffectHookMouse />
        <EffectDataFetching />
    </div>
  )
}

export default App