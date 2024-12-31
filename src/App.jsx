import React, { useState } from 'react'
import ToDo from './components/ToDo'
import ToDoList from './components/ToDoList';

const App = () => {
  
  const[listTask,SetListTask]=useState([]);
 
  let addTask=(task)=>{  

    if(task!=='')
    SetListTask([...listTask,task]) // " ❤️❤️yesma listTask ley pahila vako task haru lai dispolay garuna help 
                                                  //    garxarw    Task ley naya aako task lai liney garxa..❤️❤️"
                                                      }
        // date wala

        const[listDate,setListDate]=useState([]);

        let addDate=(date)=>{
          setListDate([...listDate,date]);
        }
                                                      



  
   const DeleteItems =(key) =>{

    let newListToDo=[...listTask]; // yesma newListToDo ma pahila ko sabai task store garuxa ...listTask ley
newListToDo.splice(key,1); //splice ley item delete garxa 1 ley 1 ota iteam delete garauxa 
SetListTask([...newListToDo]); // ani setlisttask ma delete vaye paxi ko value janxa


   }

  return (
    <div>
      <ToDo addTask={addTask}/>
      {listTask.map((ListItems,i)=>{
        return(
          <ToDoList key={i} Items={ListItems} index={i} DeleteItems={DeleteItems} /> //deleteitema ma mathi bata delete items ko function lai store garxa rw todolist ma button ma props pathau xa



        )

      })} </div>
  )
}

export default App