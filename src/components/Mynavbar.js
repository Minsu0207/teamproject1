import { Nav, Navbar, Container } from "react-bootstrap";

const Mynavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="Navber">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/img/bus1.png"}
              width="50" height="50" className="d-inline-block align-text-top" />

            <h1>사업용 버스 운행 분석 웹서비스</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="page1">운전습관분석</Nav.Link>
            <Nav.Link href="page2">운행정보분석</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Mynavbar;
