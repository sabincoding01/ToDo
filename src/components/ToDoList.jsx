import React from 'react'
import { FaTrash } from 'react-icons/fa'

const ToDoList = (props) => {   //kunai pani props lida yeha props rakhnu parxa
  return (
    <div className='place-items-center mr-20 mt-4  '>

<li className='bg-blue-300 list-none w-80 h-7 pb-2 pl-3 border-2 rounded-md'>
 {props.Items} {/*ye props.items chai app.jsx <ToDoList key={i} Items={ListItems} /> yeha bata aako ho */}
 
 <span>
<FaTrash className='ml-80 mt-1 cursor-pointer hover:text-red-500' onClick={e=>{
props.DeleteItems(props.index)

}}/>

 </span>
 
 </li>

    </div>
  )
}

export default ToDoList