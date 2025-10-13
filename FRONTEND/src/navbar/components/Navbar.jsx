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
      className="w-100 glass-navbar row"
      style={{
        maxHeight: '150px',
      }}
    >
      <Container id="navContainer" className="h-100 d-flex flex-shrink-1">
        <Navbar.Brand href="/" className="d-flex align-items-center z-3">
          <div className="logo-container d-flex d-lg-none p-0 flex-column justify-content-center float-start">
            <Logo />
          </div>
          <h1 className="logoText flex-column d-none d-lg-flex float-start"></h1>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" disabled={window.location.href.endsWith('/')}>
              Landing
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default NavBar;