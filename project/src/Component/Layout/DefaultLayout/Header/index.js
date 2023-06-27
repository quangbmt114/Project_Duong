import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function Header() {
  const [check,setCheck]=useState(1)
  const items = [
    { id: 1, text: 'Trang Chủ' ,path:'/' },
    { id: 2, text: 'Về Chúng Tôi',path:'/aboutus'  },
    { id: 3, text: 'Căn Hộ Cho Thuê' ,path:'/apartments' }
  ];
  const handleChangePage =(item)=>{
      setCheck(item)
    console.log(item);
  }
  return (
    <>
      {[ 'xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" fixed="top">
          <Container >
            <Navbar.Brand ><img src='https://beland.vn/Assets/Images/Default/Logo.png' width={100}/></Navbar.Brand>
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
                 {items.map(item=>{
                  return(
                    <Link 
                    to={`${item.path}`}
                    key={item.id}
                     className={`menu-link ${check==item.id?"active-header":""}`}
                       onClick={()=>handleChangePage(item.id)}>
                       {item.text}
                     </Link>
                  )
                      })}
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