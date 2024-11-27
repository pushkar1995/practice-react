// import HookCounter from "./components/HookCounter"
import EffectHookCounterOne from "./components/useEffectExamples/EffectHookCounterOne"
import HookCounterFour from "./components/useStateExamples/HookCounterFour"
// import HookCounterThree from "./components/HookCounterThree"
// import HookCounterTwo from "./components/HookCounterTwo"

const App = () => {
  return (
    <div>
        <HookCounterFour />
        <EffectHookCounterOne />
    </div>
  )
}

export default App