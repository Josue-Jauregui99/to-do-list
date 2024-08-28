import { useState } from 'react'
import '../styles/TaskInput.css'



export default function TaskInput({ tasks, setTasks }) {
    const [newTask, setNewTask] = useState('')

    let taskList = tasks.map(task => task[0])

    const submitAction = () => {
        setTasks([...tasks, [newTask, false]])
        setNewTask('')
    }

    return (
        <>
            <div className='taskInput'>
                <input
                    className='inputTaskBar'
                    type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    onKeyDown={(e) => {
                        if (taskList.includes(newTask)) {
                            alert("Task already exists!")
                        }
                        else if (e.key === 'Enter') {submitAction()}
                    }}
                    placeholder="Enter a new task"
                />
                <button className = "submitButton" onClick={() => {
                    if (taskList.includes(newTask)) {
                        alert("Task already exists!")
                    }
                    else{submitAction()}
                }}>
                    Add Task
                </button>
            </div>
        </>
    )
}