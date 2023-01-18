import "./Main.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Nav, Navbar, Container, Row, Col } from "react-bootstrap";

function Maincopy() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="me-main">
            Navber
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">menu1</Nav.Link>
            <Nav.Link href="#pricing">menu2</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <Container>
        <Row>
          <Col>
            <img src={process.env.PUBLIC_URL + "/img/menu1.jpg"} width="80%" />
            <h4>첫주제</h4>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + "/img/menu2.jpg"} width="80%" />
            <h4>두번째주제</h4>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + "/img/menu2.jpg"} width="80%" />
            <h4>세번째주제</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Maincopy;
