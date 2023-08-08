import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { TasksContext } from '../context/TasksContext';

export const DeleteTareas = ({elementId}) => {


  const {setTask} = useContext(TasksContext);

    const eliminarTask = ()=>{
        let id=elementId;

        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`http://localhost:8000/api/tasks/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => setTask(response))
            .catch(error => console.log('error', error));

    }

  return (
    <Button style={{fontSize:"12px",width:"90px"}} variant="danger" onClick={eliminarTask} >Eliminar</Button>
  )
}
