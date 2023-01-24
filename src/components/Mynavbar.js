import { Button, Nav, Navbar, Container, Row, Col } from "react-bootstrap";

const Mynavbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="me-main">
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="page1">menu1</Nav.Link>
          <Nav.Link href="page2">menu2</Nav.Link>
          <Nav.Link href="page3">menu3</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Mynavbar;
