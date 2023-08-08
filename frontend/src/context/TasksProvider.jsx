import { TasksContext } from './TasksContext';
import { useEffect, useState } from "react";

export const TasksProvider = ({children}) => {


  const [task, setTask] = useState([])

    const GetTask = async() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        
       
        return await fetch("http://localhost:8000/api/tasks", requestOptions)
              .then(response => response.json())
              .then(result =>setTask(result.tareasActiv))
              .catch(error => console.log('error', error));
    }
      
      useEffect(() => {
        GetTask();
      }, [task])
  
    return (
    <TasksContext.Provider value={{task, setTask}} >
        {children}
    </TasksContext.Provider>
  )
}
