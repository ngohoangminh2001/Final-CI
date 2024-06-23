import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/home'
import Login from './assets/login'
import Profile from './assets/profile'
import toDoTasks from './assets/data.js'

function App() {
  const [count, setCount] = useState(0);
  const [taskName, setTaskName] = useState('');
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>#todo</h1>
      <button className="btn" onClick={() => { location.assign('http://localhost:5173/home'); }}>All</button>
      <button className="btn" onClick={() => { location.assign('http://localhost:5173/login'); }}>Active</button>
      <button className="btn" onClick={() => { location.assign('http://localhost:5173/profile'); }}>Completed</button>
      <input placeholder='add details' value={taskName} onChange={(e) => { setTaskName(e.target.value); }}></input>
      <button onClick={() => {
        toDoTasks.push({
        name: taskName,
        completed: false
      }); console.log(toDoTasks); alert('Add task successfully!'); }}>Add</button>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
      </Routes>
    </>
  )
}

export default App
