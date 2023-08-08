import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";

export const Terminar = ({elementId}) => {
  const [status, setStatus] = useState(""); // Estado para almacenar el resultado de la solicitud

  const handleTerminarClick = () => {
    const requestOptions = {
      method: 'PUT',
      redirect: 'follow'
    };

    // Realizar la solicitud PUT y actualizar el estado con el resultado
    fetch(`http://localhost:8000/api/tasks/markfinished/${elementId}`, requestOptions)
      .then(response => response.text())
      .then(result => setStatus(result))
      .catch(error => console.log('error', error));
  };

  return (
    <>
      <Button
        style={{ fontSize: "12px", width: "30px" }}
        variant="info"
        onClick={handleTerminarClick} 
      >
        Marcar como completada
      </Button>
    </>
  );
};
