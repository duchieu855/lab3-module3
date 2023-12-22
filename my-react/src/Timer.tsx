import { useState } from 'react'
import 'tailwindcss/tailwind.css';

function Timer () {
    const [hour,setHour] = useState(0)
    const [min,setMin] = useState(0)
    const [sec,setSec] = useState(0)
    const [miniSec,setMiniSec] = useState(0)
    const [intervalId,setIntervalId] = useState(null)
    console.log("sec",sec)
    console.log("min",min)
    console.log("hour",hour)

    if (miniSec === 99) {
        setSec(preSec => preSec + 1)
        setMiniSec(0)

    }
    if (sec === 59) {
        setMin(preMin => preMin + 1)
        setSec(0)

    }
    if (min === 59) {
        setHour(preHour => preHour + 1)
        setMin(0)

    } 

    function count () {
        setMiniSec(preMiniSec => preMiniSec + 1)
    }
    
    function start () {
       if (!intervalId) {
        const id = setInterval(count,10)
        setIntervalId(id);
       }
        
    }

    function pause () {
        if(intervalId) {
            clearInterval(intervalId)
            setIntervalId(null)
        }
    }

    function stop () {
        setMiniSec(0)
        setSec(0)
        setMin(0)
        setHour(0)
        clearInterval(intervalId)
        setIntervalId(null)
    }
        // count()
    



    return (
        <>
            <div className='mx-auto flex flex-col space-y-2 items-center mt-5 bg-gray-400 py-2 w-[250px] rounded-lg'>
                <h2 className='text-3xl text-red-500 '>TIMER</h2>
                <div className='text-xl p-2 bg-slate-500 text-white rounded-md'><span className='tracking-widest '>{hour}H:{min}M:{sec}S:{miniSec}</span></div>
                <div className='flex space-x-3'>
                    <button className='p-2 bg-blue-500 rounded-md border' type="submit" onClick={start}>Start</button>
                    <button className='p-2 bg-blue-500 rounded-md border' type="submit" onClick={pause}>Pause</button>
                    <button className='p-2 bg-blue-500 rounded-md border' type="submit" onClick={stop}>Stop</button>


                </div>
            </div>
        </>
    )
}


export default Timer