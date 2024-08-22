import { useState } from 'react'
import './styles/App.css'
import TaskInput from './components/TaskInput'
import Board from './components/Board'

export default function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <Board tasks={tasks} setTasks={setTasks} />
      <TaskInput tasks={tasks} setTasks={setTasks} />
    </>
  )
}


