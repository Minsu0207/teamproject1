import { Col, Row, Container, Alert } from "react-bootstrap";
import styled from 'styled-components';

function Page5() {

    let Box10 = styled.div`padding : 10px;`;
    let Box20 = styled.div`padding : 20px;`;
    let Box100 = styled.div`padding : 100px;`;
    return (
        <>
            <Box10 />
            <Container>
                <Row>
                    <Col>
                        <Alert variant="light" className="alert2">
                            <div className="mb-1">
                                <Box10 />
                                업무용 차량의 실시간 운행관제,운행분석 및 차량관리 등을 통합적으로 관리가 가능하며<br></br> 운영비 절감과 편리한 규제 준수가 가능 합니다.
                            </div>
                            <div className="mb-2">
                                <ul>
                                    <li>통합서비스 제공을 통한 차량관리 편의</li>
                                    <li>온실가스 배출량 규제 등 준수/관리</li>
                                    <li>차량 관리 비용 절감으로 경제성 제고</li>
                                </ul>
                            </div>
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Box20 />
                        <h4> 고객에게 편의성제공</h4>
                        <ul>
                            <li>
                                실시간 운행관제
                            </li>
                            <li>
                                운행분석 및 통계
                            </li>
                            <li>
                                차량배차 및 관리
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <Box20 />
                        <h4> 기업의 비용 절감</h4>
                        <ul>
                            <li>
                                유류비 절감
                            </li>
                            <li>
                                안전운전 가이드로 사고예방
                            </li>
                            <li>
                                경제운전 가이드로 운용비용 절감
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <Box20 />
                        <h4> 정부 규제 준수</h4>
                        <ul>
                            <li>
                                DTG 운행기록 자동제출
                            </li>
                            <li>
                                국세청 제출 운행기록부 기능으로 규제준수
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Page5;