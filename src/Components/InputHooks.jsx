import React, { useState } from 'react'

const InputHooks = () => {
    const [name, setName] = useState({firstname: "", lastname: ""})
    return (
        <div>
            <form action="">
                <input type="text"  value={name.firstname} onChange={e => setName({...name, firstname: e.target.value})}/>
                <input type="text"  value={name.lastname} onChange={e => setName({...name, lastname: e.target.value})}/>
            </form>
            <h1>First Name: {name.firstname} </h1>
            <h1>First Name: {name.lastname} </h1>
            <h2> {JSON.stringify(name)}  </h2>
        </div>
    )
}

export default InputHooks
