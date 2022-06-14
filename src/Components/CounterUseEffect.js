import React, { useState, useEffect } from 'react'

const CounterUseEffect = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Chats (${count})`
  })


  return (
    <>
      <section >
        <div >
          <h1 >Use Effect Hook </h1>
          <h2 >{count}</h2>
          <div >
            <button onClick={() => { setCount(count > 0 ? count - 1 : count) }} type="button"  disabled={count <= 0}>Decrement</button>
            <button onClick={() => { setCount(count < 10 ? count + 1 : count) }} type="button" disabled={count >= 10}>Increment</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CounterUseEffect