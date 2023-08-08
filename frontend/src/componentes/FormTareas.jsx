import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TasksContext } from '../context/TasksContext';
import { useForm } from '../hooks/useForm';

export const FormTareas = () => {

  const {setTask} = useContext(TasksContext);
    const { formState, onInputChange, onResetForm, username, description, estadoTask,color} = useForm({
        username:'',
        description:'',
        estadoTask:'',
        color:''
    });

    const fetchSave= async() => {

      let vacio=false;
      ["username","description","estadoTask","color"].forEach(key => {
      
        if(formState[key]==''){
            vacio=true;
        }
      });
      if(vacio){
        return  alert("Todos los campos son obligatorios");
      }



      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      let raw = JSON.stringify(formState);
  
      let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };
  
      await fetch("http://localhost:8000/api/tasks", requestOptions)
        .then(response => response.json())
        .then(onNewTask(setTask(response)))
        .then(onResetForm())
        .catch(error => console.log('error', error));

      
    };


  return (
    <>
    <br /><br /><br />
    <Form style={{backgroundColor:"black", padding:"25px", borderRadius:"40px", borderWidth:"3px"}} >
    <h1 style={{color:"hhite" }} >Ingresar Tarea</h1><hr />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ingresar usuario" name='username'  value={ username } onChange={ onInputChange } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={7} placeholder="Descripcion tarea" name='description'  value={ description } onChange={ onInputChange }  />
      </Form.Group>
      <Form.Select aria-label="Default select example" name='estadoTask'   value={ estadoTask } onChange={ onInputChange }  > 
      <option value="ninguno" >Estado de la tarea</option>
      <option value="Pendiente">Pendiente</option>
      <option value="Terminado">Terminado</option>
      <option value="Proceso">En Proceso</option>
    </Form.Select>
      <Form.Label style={{fontSize:"20px"}} htmlFor="exampleColorInput">Color Tarea</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="red"  
        title="Choose your color"
        className="mx-auto"
        name='color'
        value={ color }
        onChange={ onInputChange } 
      />
      <br />
      <Button className='btn-lg' onClick={fetchSave} variant="success" type="button" >
        Guardar
      </Button>
    </Form>
    </>
  )
}
