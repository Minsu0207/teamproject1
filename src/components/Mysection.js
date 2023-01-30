import { Button, Container, Row, Col } from "react-bootstrap";

const Mysection = () => {
    return (
        <Container>
            <Row>
                <Col className="col1">
                    <img src={process.env.PUBLIC_URL + "/img/menu1.jpg"} width="100%" />

                    <Button href="Page1" size="lg">
                        <h4>운전 습관 분석을 통한
                            안전 등급 확인
                        </h4>

                    </Button>
                </Col>
                <Col>
                    <img src={process.env.PUBLIC_URL + "/img/menu2.jpg"} width="100%" />
                    <Button href="page2" size="lg" >
                        <h4>운행정보 분석을 통한
                            운행 주의구간 알림
                        </h4>
                    </Button>
                </Col>

            </Row>
        </Container>

    );
};

export default Mysection;
