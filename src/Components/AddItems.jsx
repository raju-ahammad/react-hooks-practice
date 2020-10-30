import React, { useState } from 'react'

const AddItems = () => {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10) +1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>add new item</button>
            <h2>
                {
                    items.map(item => (
                        <li key={item.id}> {item.value} </li>
                    ))
                }
            </h2>
        </div>
    )
}

export default AddItems
