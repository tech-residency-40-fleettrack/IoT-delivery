import useState from 'react'
import Form from 'react-bootstrap'
import Modal from 'react-bootstrap'
import Button from 'react-bootstrap';
import loginUser from '../tokenRequest'

function LoginForm({ showLoginModal }) {
  const [credetials, setCredentials] = useState(null)
  
  return (
      <Modal show={showLoginModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Your login form goes here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Modal.Footer>
    </Modal>

  )
}

export default LoginForm;