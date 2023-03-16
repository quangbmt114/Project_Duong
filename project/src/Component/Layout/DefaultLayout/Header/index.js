import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
      {[ 'xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" fixed="top">
          <Container >
            <Navbar.Brand >Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow pe-3" style={{lineHeight:"40px"}}>
                 <Link to="/" style={{marginRight:10}}>Home</Link>
                 <Link to="/aboutus"  style={{marginRight:10}}>About Us</Link>
                 <Link to="/apartments">Apartments</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;