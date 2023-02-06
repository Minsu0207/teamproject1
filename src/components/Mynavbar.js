import { Nav, Navbar, Container } from "react-bootstrap";

const Mynavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="Navber">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/img/logo_black.png"}
              width="80" height="80" className="logo"
            />
            <h3>사업용 버스 운행 분석 웹서비스</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Mynavbar;
