import { useState } from 'react'



export default function TaskInput({tasks, setTasks}) {
    const [newTask, setNewTask] = useState('')

    return (
        <>
            <input
                type="text"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
            />
            <button onClick={() => {
                setTasks([...tasks, newTask])
                setNewTask('')
            }}>
                Add Task
            </button>
        </>
    )
}