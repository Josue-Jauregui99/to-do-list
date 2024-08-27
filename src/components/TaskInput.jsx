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
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setTasks([...tasks, [newTask, false]])
                            setNewTask('')
                        }
                    }}
                    placeholder="Enter a new task"
                />
                <button className = "submitButton" onClick={() => {
                    setTasks([...tasks, [newTask, false]])
                    setNewTask('')
                }}>
                    Add Task
                </button>
            </div>
        </>
    )
}