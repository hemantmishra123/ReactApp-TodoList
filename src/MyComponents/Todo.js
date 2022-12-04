import React from 'react'

export const Todo = ({todo,onDelete}) => {
  return (
     <div>
        <p>{todo.name}</p>
        <p>{todo.technology}</p>
        <p>{todo.language}</p>
        <button className='btn btn-sm btn-danger' onClick = {()=>{onDelete(todo)} }>Delete</button>
     </div>
  )
}
