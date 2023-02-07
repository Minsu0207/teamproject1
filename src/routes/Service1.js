import { Col, Row, Container, Alert } from "react-bootstrap";
import styled from 'styled-components';
function Service1() {


    let Box20 = styled.div`padding : 10px;`;
    return (
        <>
            {/* <Container>
                <Row>
                    <Col>
                        <Alert variant="primary">
                            <Alert.Heading >서비스 소개<br></br></Alert.Heading>
                            <p className="mb-1">
                                교통안전공단에 DTG 운행기록 및 운행관제, 차량배차 관리, 운행분석 통계를
                                유류비 절감은 물론 교통사고를 예방합니다.
                            </p>
                            <hr />
                            <p className="mb-0">
                                DTG(Digital Tacho Graphic)는 실시간 운행 관제 및 패턴 분석으로

                                친환경 경제운전, 안전운전 습관을 유도하며, 비용절감/사고감소 등 업무 생산성 향상 목적의 서비스 제공
                            </p>
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container> */}

            <Box20 />
            <Box20 />
            <Container>
                <Row>
                    <Col>
                        <p className="mb-1">
                            교통안전공단에 DTG 운행기록 및 운행관제, 차량배차 관리, 운행분석 통계를<br />
                            유류비 절감은 물론 교통사고를 예방합니다.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="lmb-1">
                            서비스 구성
                        </div>
                        <img
                            alt=""
                            src={process.env.PUBLIC_URL + "/img/1-3.png"}
                        />
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Service1;