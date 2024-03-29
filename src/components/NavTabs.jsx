import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar expand="lg" className="bg-dark text-light" variant='dark'>
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="white-text">
              <Link to={'/'} className={`${currentPage === '/' ? 'nav-link active' : 'nav-link'} white-text`}>Home</Link>
            </Nav.Link>
            <Nav.Link className="white-text">
              <Link to={'/About'} className={`${currentPage === '/About' ? 'nav-link active' : 'nav-link'} white-text`}>About Me</Link>
            </Nav.Link>
            <Nav.Link className="white-text">
              <Link to={'/Project'} className={`${currentPage === '/Project' ? 'nav-link active' : 'nav-link'} white-text`}>Projects</Link>
            </Nav.Link>
            <Nav.Link className="white-text">
              <Link to={'/Resume'} className={`${currentPage === '/Resume' ? 'nav-link active' : 'nav-link'} white-text`}>Resume</Link>
            </Nav.Link>
            <Nav.Link className="white-text">
              <Link to={'/Contact'} className={`${currentPage === '/Contact' ? 'nav-link active' : 'nav-link'} white-text`}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;