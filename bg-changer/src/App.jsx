import React from 'react'
import { useState } from 'react'
function App() {
  const [color, setColor] = useState("black")
  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}
    >
      <div className='fixed flex justify-center  flex-wrap bottom-12 inset-x-0 px-2'>
        <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-3xl'>

          <button className='outline-none px-4 rounded-2xl'
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}>
            blue</button>

          <button className='outline-none px-4 rounded-2xl'
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}>
            yellow</button>

          <button className='outline-none px-4 rounded-2xl'
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}>

            green</button>

          <button className='outline-none px-4 rounded-2xl'
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}>
            red</button>

          <button className='outline-none px-4 rounded-2xl'
            onClick={() => setColor("purple")}
            style={{ backgroundColor: "purple" }}>
            purple</button>

        </div>
      </div>
    </div>
  )
}

export default App
