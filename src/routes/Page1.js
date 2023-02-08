import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Col, Container, Row, Alert, Card, Button } from "react-bootstrap";
import CardHeader from 'react-bootstrap/esm/CardHeader';

function Page1() {
  let { vehicle } = useSelector((state) => { return state })
  // const navigate = useNavigate();
  // const handle = (k) => {
  //   navigate(k);
  // };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Alert variant="light" className="alert2">
              <Alert.Heading className="alert0">  운전 습관 분석을 통한
                안전 등급 확인</Alert.Heading>
              <div className="mb-1">
                업무용 차량의 운행관제,운행분석 및 차량관리 등을 통합적으로 관리가 가능하며<br></br> 운영비 절감과 편리한 규제 준수가 가능 합니다.
              </div>
            </Alert>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {vehicle.map((a, i) => (
            <Col>
              <Card
                key={i}
                style={{ width: '13rem' }}
                border={a.judgment >= 2 ? 'danger' : 'success'}
                className="mb-2"
                bg={a.judgment >= 2 ? 'danger' : 'success'}
                text='white'
              >
                <CardHeader> 차량번호 {a.car_num}</CardHeader>
                <Card.Body>
                  <Card.Text>운행점수 {a.drs}</Card.Text>
                  <Card.Text>차량점수 {a.vrs}</Card.Text>
                  <Card.Text>종합점수 {a.ts}</Card.Text>
                  <Card.Footer>
                  </Card.Footer>
                  <Button href={`${a.car_num}`} variant="outline-light">
                    상세정보
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Page1;
