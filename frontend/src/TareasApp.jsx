import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormTareas } from './componentes/FormTareas';
import { ListTareas } from './componentes/ListTareas';
import { useState, useContext, React } from 'react';
import { TasksProvider } from './context/TasksProvider';

export const TareasApp = () => {
  return (
    <>
      <TasksProvider>
        <h1 style={{ textAlign: 'center', margin: '2px', fontSize: '5rem',color:"white" }}>1° TP Programación IV</h1>
        <Container>
          <Row xs={1} md={1} lg={2}>
            <Col className='mx-auto text-center' style={{ padding: '20px', color: 'white', borderRadius: '30px' }}><FormTareas /></Col>
            <Col className='mx-auto' style={{ padding: '20px' }}><ListTareas /></Col>
          </Row>
        </Container>
      </TasksProvider>
    </>
  );
};
