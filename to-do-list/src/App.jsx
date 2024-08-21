import { useState } from 'react'
import './styles/App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')


  return (
    <>
      <div className="board">
        {
          tasks.map((task) => (
            <div key={task} className="task" onClick={()=>{
              setTasks(tasks.filter(t=>t!==task))
            }}>
              {task}
            </div>
          ))
        }
      </div>
      <input type="text" className="input" value={newTask} onChange={e=>setNewTask(e.target.value)}/>
      <button className="button" onClick={()=>{
        tasks.push(newTask)
      setNewTask('')}
    }>Add Task</button>
    </>
  )
}

export default App
