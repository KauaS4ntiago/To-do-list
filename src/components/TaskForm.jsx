import { useState } from 'react'

function TaskForm({ onAdd }){

    const [input, setInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        onAdd(input)
        setInput('')
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}


export default TaskForm