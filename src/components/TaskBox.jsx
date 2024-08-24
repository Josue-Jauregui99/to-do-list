import { useState } from 'react'
import { DeleteButton } from './DeleteButton'


export default function TaskBox({tasks, setTasks, task}) {
    return (
    <>
        <div id={task} className="taskbox">
            <input type="checkbox"></input>
            {task}
            <DeleteButton className="taskBoxDeleteButton" deleteAction={()=>{
              setTasks(tasks.filter(t => t !== task))
              }}/>
        </div>
    </>
    )
}