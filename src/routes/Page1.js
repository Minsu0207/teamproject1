import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Col, Container, Row, Alert, Card, Button } from "react-bootstrap";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import styled from 'styled-components';

function Page1() {
  let { vehicle } = useSelector((state) => { return state })
  // const navigate = useNavigate();
  // const handle = (k) => {
  //   navigate(k);
  // };
  let Box20 = styled.div`padding : 20px;`;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Alert variant="light" className="alert1-1">
              <Alert.Heading className="alert0">  운전 습관 분석을 통한
                안전 등급 확인</Alert.Heading>
              <div className="mb1-1" >
                업무용 차량의 운행관제,운행분석 및 차량관리 등을 통합적으로 관리가 가능하며<br></br> 운영비 절감과 편리한 규제 준수가 가능 합니다.
              </div>
            </Alert>
          </Col>
        </Row>
      </Container>
      <Container>
        <Box20 />
        <Row>
          {vehicle.map((a, i) => (
            <Col>
              <Card
                key={i}
                style={{ width: '15rem' }}
                border={a.judgment > 1 ? 'danger' : 'success'}
                className="mb-2"

                text='black'
              >
                <Button key={i} className="bt1-1" href={`/drive/${a.car_num}`} variant="dark">
                  차량번호 : {a.car_num}
                  {a.judgment > 1 ? '　🔴' : '　🟢'}

                </Button>
                <CardHeader>
                </CardHeader>
                <Card.Body>
                  <Card.Text>운행점수 {a.drs}</Card.Text>
                  <Card.Text>차량점수 {a.vrs}</Card.Text>
                  <Card.Text>종합점수 {a.ts}</Card.Text>
                  <Card.Footer>
                  </Card.Footer>
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
