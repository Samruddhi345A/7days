import React from 'react'
import './App.css'
import Lists from './components/Lists'
import { useEffect } from 'react'
function App() {
  const [todos, setTodos] = React.useState([])
  const [inputValue, setInputValue] = React.useState('')
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos(prev => [...prev, { id: Date.now(), task: inputValue, complete: false }])
      setInputValue('')
    }
  }

  const handleCompleteTask = (taskid) => {
    setTodos(prev => prev.map((todo) =>
      (todo.id === taskid) ? {
        ...todo,
        complete: !todo.complete
      } : todo

    ))
  }

  const handleDeleteTask = (taskid) => {
    setTodos(prev => prev.filter(todo => todo.id != taskid))
  }
  return (
    <>
      <div className='min-h-60 flex flex-row justify-center items-center'>
        <input
          className='h-10 border-b border-b-cyan-950 focus:outline-none items-center '
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='p-2 m-2 border text-blue-900 border-cyan-950 hover:bg-cyan-700 font-normal hover:text-white py-2 px-4 rounded' onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        <ul>
          {todos.map(
            (todo) => <Lists key={todo.id} todo={todo} completeTask={handleCompleteTask} deleteTask={handleDeleteTask} />
          )}
        </ul>
      </div>
    </>
  )
}

export default App