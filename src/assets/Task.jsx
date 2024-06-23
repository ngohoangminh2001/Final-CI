import React, { useState } from 'react'
import './Task.css'
import toDoTasks from './data.js'

const Task = (props) => {
  const [checked, setChecked] = useState(props.task.completed);
  const [showTaskArea, setShowTaskArea] = useState(true);
  return (
    <>
      {showTaskArea && <div className='taskArea'>
        <input type='checkbox' className='tick' checked={checked} onChange={e => {
          setChecked(e.target.checked);
          toDoTasks[toDoTasks.indexOf(props.task)].completed = e.target.checked;
          console.log(toDoTasks);
        }}></input>
        {!checked && <p className='taskName'>{props.name}</p>}
        {checked && <p className='lineThrough'>{props.name}</p>}
        <button className='delete' onClick={() => { setShowTaskArea(false); delete toDoTasks[toDoTasks.indexOf(props.task)]; console.log(toDoTasks); }}>Delete</button>
      </div>}
    </>
  )
}

export default Task