import React from 'react'
import FocusInput from './components/useRefExamples/FocusInput'
import ClassTimer from './components/useRefExamples/ClassTimer'
import HookTimer from './components/useRefExamples/HookTimer'


const App = () => {
  return (
    <div>
      <ClassTimer />
      <HookTimer />
    </div>
  )
}

export default App