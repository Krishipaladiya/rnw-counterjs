import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CounterFun from './Components/CounterFun'
import CounterClass from './Components/CounterClass'
import CounterUseEffect from './Components/CounterUseEffect'

const App = () => {
  return (
    <>
      <CounterClass />
      <CounterFun />
      <CounterUseEffect />
    </>
  )
}

export default App