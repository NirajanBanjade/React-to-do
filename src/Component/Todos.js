import React from 'react'
import {List} from '../Component/List'

export default function Todos(props) {
  return (
    <div className='todocontainer'>
       <h3 className='text-center'>Works to do</h3>

    
      {Array.isArray(props.todos) && props.todos.length===0? "Congratulations!!! You finished all the pending works...." :
   
      props.todos.map((variab)=>{
      
        return <List todo={variab} key = {variab.Num} ondelete={props.ondelete}/>
          
        
        
      })
    } 
    
        
  </div>
      
)
}

