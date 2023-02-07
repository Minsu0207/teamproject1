import { Nav, Navbar, Container } from "react-bootstrap";

const Mynavbar = () => {
  return (
    <>
      <Navbar bg="black" variant="dark" fixed="top" sticky="top">
        <Container className="container1">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/img/logo.png"}
              width="90" height="60" className="logo"
            />{' '}
            사업용 버스 운행 분석 웹서비스
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Mynavbar;


