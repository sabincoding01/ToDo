import React, { useState } from 'react'

const ToDo = (props) => {

  const[task,setTask]=useState();
  const[date,setDate]=useState();




  return (
    <>

    <div className='place-items-center pt-20'>

{/* heading for ToDo */}

<div>

<h1 className='text-blue-900 text-3xl font-bold'>Add your Daily Task Here</h1>
</div>

<div className='flex pt-4'>
{/* task input box */}
<div className='pr-4'>
 <input type="text" name="" id="" value={task} className='bg-slate-200 w-80 h-8 rounded-lg pl-2 ' placeholder='    Add your task Here...............' style={{border:"2px solid",}} onChange={e =>{setTask(e.target.value)}}/> {/* setTask ma box ko value jani vayeko ley hamiley e.target.value rakheko */}
 <input type="text" name="" id="" value={date} className='bg-slate-200 w-80 h-8 rounded-lg pl-2 ' placeholder='    Add your date Here...............' style={{border:"2px solid",}} onChange={e=>{setDate(e.target.value)}}/>
</div>

{/* task add button */}
<div>
<button className='bg-green-200 p-1 rounded-xl hover:bg-green-600 delay-150' onClick={()=>{
props.addTask(task)// yo addTask chai hamroo app.jsx bata aako jaba button click hunxa taba yesley addTask lai call garxa

}}> Add Task</button>

</div>
</div>

    </div>
    </>
  )
}

export default ToDo