import React, { useState } from 'react'
import './App.css'
function App() {
  const [text, setText] = useState("");
  let textCount = text.length
  let wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const handleChange = (e) => {
    setText(() => (e.target.value))
  }

  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center  '>
        <input id='textField' className="items-center text-center justify-center border-b border-b-blue-950 focus:outline-none" value={text} onChange={handleChange} placeholder='Enter Text' />
        <div className='p-1 m-7 flex flex-row'>
          <p className='p-3 text-center font-thin text-sm'>
            Character count: {textCount}
          </p>
          <p className='p-3 text-center font-thin text-sm'>
            Word count: {wordCount}
          </p>
        </div>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2' onClick={() => setText(text.toUpperCase())}>Convert to Uppercase</button>
        <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2' onClick={() => setText(text.toLowerCase())}>Convert to Lowercase</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setText("")}>Clear Text</button>

      </div>
    </>
  )
}

export default App