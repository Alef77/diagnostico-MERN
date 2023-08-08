import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormLog = () => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Iniciar sesión</Card.Title>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo ELectronico</Form.Label>
        <Form.Control type="email" placeholder="name@mail.com" />
        <Form.Text className="text-muted">
        Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="******" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
    </>
  )
}
