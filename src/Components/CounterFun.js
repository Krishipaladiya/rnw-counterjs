import React, { useState } from 'react'

const CounterFun = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <section >
                <div >
                    <h1 >Use State Hook</h1>
                    <h2  >{count}</h2>
                    <div >
                        <button onClick={() => { setCount(count > 0 ? count - 1 : count) }} type="button"  disabled={count <= 0}>Decrement</button>
                        <button onClick={() => { setCount(count < 10 ? count + 1 : count) }} type="button" disabled={count >= 10}>Increment</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CounterFun