import React from 'react'

export const List = ({todo,ondelete}) => {
  return (
    <div style={{padding: '50px'}}><h3>{todo.title}</h3>
         <p>{todo.descrip}</p>
          <button className="btn btn-danger" onClick={()=>ondelete(todo)}>Delete</button>

    </div>

  )
}

