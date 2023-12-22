/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { SetStateAction, useState } from 'react'
import 'tailwindcss/tailwind.css';

const CalCuLator = () => {
    const [input, setInput] = useState(0);
    const [result,setResult] = useState("")
    
        const handleButtonClick = (value: number | SetStateAction<string>) => {
            if(!isNaN(value)) {
                if(result == "+") {
                    setInput(preInput => (preInput +  value));
                    setResult("")
                } else if(result == "-") {
                    setInput(preInput => (preInput -  value));
                    setResult("")
                } else if(result == "*") {
                    setInput(preInput => (preInput *  value));
                    setResult("")
                } else if(result == "/") {
                    setInput(preInput => (preInput /  value));
                    setResult("")
                } else if(result == "%") {
                    setInput(preInput => (preInput %  value));
                    setResult("")
                }  else {
                    setInput(preInput => preInput + value);
                }
                
            } else if(value == "=") {
                setInput(input);
                setResult("")
            } else if(value == "C") {
                setInput(0);
                setResult("")
            } else {
                setResult(value)
                // setInput(value)
            }
            console.log(result)
  };


    return (
        <>
            <div className='mx-auto p-4 bg-orange-400 w-[210px]'>
                <h2 className='text-3xl text-red-500'>CALCULATOR</h2>
                <div className=' border mb-2'>
                    <input className='text-end me-2 bg-slate-500 text-white' type="text" value={input} readOnly />
                </div>
                <div className='flex justify-start space-x-4'>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick(7)}>7</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick(8)}>8</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick(9)}>9</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick('/')}>/</button>
                </div>
                <div className='flex justify-start space-x-4'>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick(4)}>4</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick(5)}>5</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick(6)}>6</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick('*')}>*</button>
                </div>
                <div className='flex justify-start space-x-4'>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick(1)}>1</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick(2)}>2</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick(3)}>3</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick('-')}>-</button>
                </div>
                <div className='flex justify-start space-x-4'>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick(0)}>0</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick('+')}>+</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick('=')}>=</button>
                    <button className='p-2 w-8  bg-slate-500 text-white border' onClick={() => handleButtonClick('C')}>C</button>
                </div>
                
            </div>
        </>
    )

}

export default CalCuLator