import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoList from './App.tsx'
import CalCuLator from './Calculator.tsx'
import Timer from './Timer.tsx'
import SimpleRandom from './SimpleRandom.tsx'
import './index.css'
import 'tailwindcss/tailwind.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToDoList />
    <CalCuLator />
    <Timer />
    <SimpleRandom />

  </React.StrictMode>,
)
