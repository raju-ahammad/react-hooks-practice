import React, { useState } from 'react'

const UseEffectHooks = () => {

    const [age, setAge] = useState(0)
    return (
        <div>
            <h3>Age is : {age}</h3>
        </div>
    )
}

export default UseEffectHooks
