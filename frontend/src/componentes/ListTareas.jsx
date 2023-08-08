import { useContext, useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import { ListItem } from "./ListItem";
import { TasksContext } from '../context/TasksContext';
;

export const ListTareas = () => {

  const {task} = useContext(TasksContext);
    

  return (
    <>
    <h1 style={{color:"white", backgroundColor:"black",width:"400px",borderRadius:"30px", margin:"auto"}} >Lista de Tareas</h1>
    <br />  <h6 style={{color:"white", backgroundColor:"black",width:"150px",borderRadius:"30px"}}  >Total Tareas: {task.length}</h6>
    <Row xs={1} md={2} className="g-4">
      {task.map((element, indice) => (
       <ListItem indice={indice} element={element} />
      ))}
    </Row><br />
    </>
  )
}
