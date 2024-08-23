import { useState, useEffect } from 'react'
import './styles/App.css'
import TaskInput from './components/TaskInput'
import TaskBox from './components/TaskBox'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      return JSON.parse(savedTasks)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
      <div className="app">
        <TaskInput tasks={tasks} setTasks={setTasks} />
        <div className="board">
          {
            tasks.map((task) => (
              console.log(task),
              <TaskBox tasks={tasks} setTasks={setTasks} task={task} />
            ))
          }
        </div>
      </div>
    </>
  )
}


