import React from 'react'
import {List} from '../Component/List'

export default function Todos(props) {
  return (
    <div className='todocontainer'>
       <h3 className='text-center'>Works to do</h3>

    {
      (props.todos.map((variab)=>{
      
        return <List todo={variab} key = {variab.Num} ondelete={props.ondelete}/>
          
        
        
      }))
    }
        
    </div>
      
  )
}

