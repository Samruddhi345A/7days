import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


function Lists({ todo, completeTask, deleteTask }) {
    library.add(fas, far, fab)
    return (
        <li className='flex items-center gap-1 m-1 p-3'>
            <input type='checkbox' className='' value={todo.task} onChange={() => completeTask(todo.id)} checked={todo.completeTask} />
            <span className={todo.complete ? "line-through opacity-50" : ""} key={todo.task}>{todo.task}</span>
            <span className='ml-6 cursor-pointer hover:text-red-600' onClick={() => deleteTask(todo.id)}>

                <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </span>
        </li>
    )
}

export default Lists