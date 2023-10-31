import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SKButton from "./SKButton";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="nav-bg py-15 sticky-top">
        <Container>
          <Navbar.Brand href="#" className="text-white me-30">
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-white"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                Skills
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                Projects
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
            <SKButton name="Let's Connect" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
