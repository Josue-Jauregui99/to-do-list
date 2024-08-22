import { useState } from 'react'

export default function Board({tasks, setTasks}){
    return (
    <>
        <div className="board">
          {
            tasks.map((task) => (
              console.log(task),
              <div key={task} className="task" onClick={() => {
                setTasks(tasks.filter(t => t !== task))
              }}>
                {task}
              </div>
            ))
          }
        </div>
    </>
    )
}