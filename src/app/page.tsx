'use client'

import { useEffect, useState } from "react"

export default function demo() {
  const [count, setCount] = useState(0);
  const [bgNumber, setBgNumber] = useState(0);

  useEffect(() => {
    if(count>=0){
      setBgNumber(count*100)
    }
  },[count])

  return (
    <main className={`flex min-h-screen border-l bg-green-${bgNumber} flex-col gap-4 items-center p-24`}>
      
      <h1>bg coloer: {bgNumber}</h1>
    <h1 className="text-4xl">count: {count}</h1>
    <div className="flex gap-2">
      <button onClick={() => setCount(count-1)} className="hover:bg-slate-500  bg-slate-400 px-4 py-2 rounded border-2 border-black shadow-lg shadow-slate-200"> increment</button>
      <button onClick={() => setCount(count +1)} className="hover:bg-slate-200  bg-slate-400 px-4 py-2 rounded border-2 border-black shadow-lg shadow-slate-200">increment</button>
    </div>
     
      
    </main>
  )
}