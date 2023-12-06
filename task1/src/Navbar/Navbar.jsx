import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

function Navbar1() {

  return (
    <>
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex flex-end">

              <NavLink className="mx-5" to="">
                <Button>Home page</Button>
              </NavLink>

              <NavLink className="mx-5" to="table">
                <Button>Table page</Button>
              </NavLink>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
