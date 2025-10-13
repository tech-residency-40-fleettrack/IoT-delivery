import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../logo/components/Logo';
import '../navbar.css';

function NavBar() {

  return (
    <Navbar
      expand="lg"
      fixed="top"

      className="w-100 glass-navbar"
      style={{
        maxHeight: '150px',
      }}
    >
      <Container id="navContainer" className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <div className="logo-container d-flex d-lg-none p-0 flex-column justify-content-center float-start">
            <Logo />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle className='d-lg-none' aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" disabled={window.location.href.endsWith('/')}>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;