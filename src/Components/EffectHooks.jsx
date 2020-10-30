import React, { useEffect, useState } from 'react';

const EffectHooks = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")
    useEffect(()=> {
        document.title = `you clicked ${count} times`
        console.log('useeffect update document title')
        console.log(count);
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={e=> setName(e.target.value)} />
            <button onClick={()=> setCount(count+1)}> click {count}</button>
        </div>
    )
}

export default EffectHooks
