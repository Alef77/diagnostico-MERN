import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { DeleteTareas } from './DeleteTareas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Terminar } from './Terminar';

export const ListItem = ({ element = [], indice = 0 }) => {
  const cardStyle = {
    backgroundColor: element.color,
    borderWidth: "4px",
    borderColor: "black",
    transform: element.estadoTask === "Terminado" ? "rotate(15deg) scale(0.8)" : "none",
    transition: "transform 0.3s ease",
    // Agrega otros estilos necesarios para el efecto de tarjeta rota
  };

  return (
    <Col>
      <Card key={element.id} style={cardStyle}>
        <Card.Body>
          <p>👤 {element.username}</p>
          <Card.Text>
            Descripcion: {element.description}<br />
            Estado: {element.estadoTask}
          </Card.Text>
        </Card.Body>
        <ButtonGroup size="sm">
          {element.estadoTask !== "Terminado" && <Terminar elementId={element._id} />}
          <DeleteTareas elementId={element._id} />
        </ButtonGroup>
      </Card>
    </Col>
  );
};
