import { Button, Container, Row, Col } from "react-bootstrap";

const Mysection = () => {
    return (
        <Container>
            <Row>
                <Col className="col1">
                    <Button variant="outline-secondary" href="Page1" size="lg">
                    <img src={process.env.PUBLIC_URL + "/img/menu1.jpg"} width="100%" />
                        <h4>운전 습관 분석을 통한
                            안전 등급 확인</h4></Button>{' '}
                </Col>
                <Col className="col1">
                    <Button variant="outline-secondary" href="Page2" size="lg">
                    <img src={process.env.PUBLIC_URL + "/img/menu2.jpg"} width="100%" />
                        <h4>운행정보 분석을 통한
                            운행 주의구간 알림
                        </h4>
                    </Button>{' '}
                </Col>
            </Row>
        </Container>

    );
};

export default Mysection;
