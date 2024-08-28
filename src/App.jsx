import { useState, useEffect } from 'react'
import './styles/App.css'
import TaskInput from './components/TaskInput'
import TaskBox from './components/TaskBox'
import YZRYBanner from './components/YZRYBanner'

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
      <YZRYBanner />
      <div className="app">
        <h1>To-Do List</h1>
        <TaskInput className="mainInput" tasks={tasks} setTasks={setTasks} />
        <div className="board">
          {
            tasks.map((task) => (
              <TaskBox tasks={tasks} setTasks={setTasks} task={task} />
            ))
          }
        </div>
      </div>
    </>
  )
}


