import { Button, Nav, Navbar, Container, Row, Col } from "react-bootstrap";

const Mysection = () => {
    return (
        <Container>
            <Row>
                <Col className="col1">
                    <img src={process.env.PUBLIC_URL + "/img/menu1.jpg"} width="90%" />

                    <h4>운전습관 분석을 통한
                        안전운전 예측 시스템
                    </h4>
                    <Button href="Page1" size="lg">이동</Button>
                </Col>
                <Col>
                    <img src={process.env.PUBLIC_URL + "/img/menu2.jpg"} width="90%" />
                    <h4>차량 노후화? 인지 능력 분석?
                    </h4>
                    <Button href="page2" size="lg" >이동</Button>
                </Col>
                <Col>
                    <img src={process.env.PUBLIC_URL + "/img/menu6.jpg"} width="90%" />
                    <h4>세번째주제</h4>
                    <Button href="page3" size="lg">이동</Button>
                </Col>
            </Row>
        </Container>

    );
};

export default Mysection;
