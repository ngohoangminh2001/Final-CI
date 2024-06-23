import React from 'react'
import './home.css'
import Task from './Task.jsx'
import toDoTasks from './data.js'

const profile = () => {
  return (
    <div>
      {toDoTasks.map((task) => {
                        return (task.completed && <Task task={task} name={task.name} completed={task.completed}></Task>)
                    })}
    </div>
  )
}

export default profile