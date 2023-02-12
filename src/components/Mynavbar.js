import { Navbar, Container } from "react-bootstrap";

const Mynavbar = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top" sticky="top">
        <Container className="container1">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/img/bus3.png"}
              // src={process.env.PUBLIC_URL + "/img/bus115-1.png"}
              // src={process.env.PUBLIC_URL + "/img/logo3.png"}
              width="130" height="110" className="logo"
            />{' '}
            사업용 버스 운행 분석 웹서비스
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Mynavbar;


