import React, { useState } from 'react'

function App() {
  const [counter, setcounter] = useState(12);
  const addValue = ()=>{
    setcounter(counter + 1);
  }
  const removeValue=()=>{
    setcounter(counter -1);
  }
  return (
    <div >
      <h1 className='bg-green-400 text-center'>Counter app</h1>
      <h2 className='bg-green-400  text-center'> counter value: {counter}</h2>
      <div className="flex items-center justify-center gap-4 mt-5">
        <button className='  bg-yellow-600  rounded-3xl px-3 py-2 mt-3' onClick={addValue}>Add value </button>
      <br />
      <button className=' bg-yellow-600  rounded-3xl px-3  py-2 mt-3'onClick={removeValue}> Remove value </button>
      </div>
      </div>

  )
}

export default App
