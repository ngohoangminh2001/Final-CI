import React, { useState } from 'react'
import './home.css'
import Task from './Task.jsx'
import toDoTasks from './data.js'

const home = () => {
  return (
    <div>
      {toDoTasks.map((task) => {
        return (<Task task={task} name={task.name} completed={task.completed}></Task>)
      })}
    </div>
  )
}

export default home