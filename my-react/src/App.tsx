/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react'
// import './App.css'
import 'tailwindcss/tailwind.css';


function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(["a"]);
  
  function handleAdd () {
    setTasks((preTasks) => [...preTasks, task])
    setTask("")
  }
  
  function handleRemove (id : number) {
    const updatedTasks = [...tasks]
    updatedTasks.splice(id,1)
    setTasks(updatedTasks);

  }
  
  window.onclick = (e) => {
    if (e.target.classList.contains("del")) {
      const id : number = e.target.getAttribute("data-set")
      console.log(id)
      handleRemove(id);
    }
  }
  // window?.crypto.randomUUID()

  return (
    <>
      <div className='space-y-2 px-10 '>
        <h1 className='text-3xl text-red-500'>TODO LIST</h1>
        <input type="text" value={task} name="task" id="task" placeholder='Công việc....' onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => (e.key === "Enter" ? handleAdd() : null)}/>
        <button type="submit" className='ml-2 py-[2px] px-2 bg-blue-500 text-white rounded-md' onClick={handleAdd}>ADD</button>
        <ul className='flex flex-col space-y-2 w-[400px]'>
          {
            tasks.map((task ,index) => {
              return (<li key={index}  className='flex space-x-4 items-center text-xl justify-between'>
                {/* {console.log(task, index)} */}
                          <span>&#10003;</span>
                          <div>{task}</div>
                          <span className='del' data-set={index}>&#10006;</span>
                          {/* <button type="submit" onClick={() => handleRemove(index)}>&#10006;</button> */}
                </li>)
            })
          }
        </ul>
      </div>
    </>
  )
}

export default ToDoList
