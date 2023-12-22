import { useState } from "react";
import 'tailwindcss/tailwind.css';

function SimpleRandom () {
    const [min,setMin] = useState(0)
    const [max,setMax] = useState(0)
    const [numRandom,setNumRandom] = useState(0)

    console.log(min,max)
    

    function handlRandom() {
        const num = Math.floor(Math.random() * max) + min

        // const num = (Math.random()) * (max+1)
        console.log(num)
        console.log(max+1)
        setNumRandom(num)
    }


    return (
        <>
            <div className="flex flex-col justify-center items-center bg-purple-500 space-y-3 w-[400px] p-4 text-xl mt-5 mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <p className="grow w-full bg-white text-center">{numRandom}</p>
                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="minNum">Min</label>
                            <input className="rounded text-center" type="number" name="minNum" id="minNum" value={min} onChange={(e) => setMin(+(e.target.value))}/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="maxNum">Max</label>
                            <input className="rounded text-center" type="number" name="maxNum" id="maxNum" value={max} onChange={(e) => setMax(+e.target.value)}/>
                        </div>
                    </div>
                </div>

                <button className="p-2 text-xl text-white bg-cyan-500 rounded-lg w-full" type="submit" onClick={handlRandom}>GENERATE</button>
            </div>
        </>
    )
}

export default SimpleRandom