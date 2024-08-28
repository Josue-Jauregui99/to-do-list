import { useState } from 'react'
import { DeleteButton } from './DeleteButton'
import '../styles/TaskBox.css'


export default function TaskBox({tasks, setTasks, task}) {
    const [checked, setChecked] = useState(task[1])
    const handleCheck = (e) => {
        setChecked(e.target.checked)
        let tempIndex = tasks.indexOf(task)
        let temp = tasks
        temp[tempIndex][1] = e.target.checked
        setTasks([...temp])
    }
    return (
    <>
        <div id={task[0]} className="taskbox">
            <input 
            type="checkbox"
            checked = {checked}
            onChange={handleCheck}>{}</input>
            <a style={{textDecoration: checked?"line-through":"none"}}>{task}</a>
            <DeleteButton className="taskBoxDeleteButton" deleteAction={()=>{
                setTimeout(() => {
              setTasks(tasks.filter(t => t !== task))
            },100);
            }}/>
        </div>
    </>
    )
}