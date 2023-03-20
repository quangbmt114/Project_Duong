import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

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
                  <div >
                    <Link to="/"
                     className={`menu-link active-header`}
                    
                      >Trang Chủ</Link>
                  </div>
                  <div>
                    <Link to="/aboutus" className='menu-link' >Về Chúng Tôi</Link>
                  </div>
                  <div >
                    <Link to="/apartments" className='menu-link'>Căn Hộ Cho Thuê</Link>
                  </div>
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