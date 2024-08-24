import { useState } from 'react'
import '../styles/TaskInput.css'



export default function TaskInput({ tasks, setTasks }) {
    const [newTask, setNewTask] = useState('')

    return (
        <>
            <div className='taskInput'>
                <input
                    className='inputTaskBar'
                    type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={() => {
                    setTasks([...tasks, newTask])
                    setNewTask('')
                }}>
                    Add Task
                </button>
            </div>
        </>
    )
}