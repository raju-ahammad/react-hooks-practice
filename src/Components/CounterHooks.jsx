import React, { useState } from 'react';

const CounterHooks = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    const setIncrement = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevstate => prevstate+1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevstate => prevstate+1)}>Increment</button>
            <button onClick={()=> setCount(prevstate => prevstate -1)}>Decrement</button>
            <button onClick={setIncrement}>setincremetn</button>
        </div>
    )
}

export default CounterHooks
