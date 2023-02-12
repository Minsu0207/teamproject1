import { useSelector } from 'react-redux';
import { Col, Container, Row, Alert, Card, Button } from "react-bootstrap";
import styled from 'styled-components';

function Page1() {
  let { vehicle } = useSelector((state) => { return state })
  let Box20 = styled.div`padding : 20px;`;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Box20 />
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
            <Col key={i} className="p1cardcol">
              <Card
                key={i}
                style={{ width: '15rem' }}
                border={a.judgment >= 2 ? 'danger' : 'success'}
                className="mb-2"
                text='black'
              >
                <Button key={i} className={`bt${a.judgment}`} href={`/drive/${a.car_num}`} variant="dark"
                >
                  차량번호 : {a.car_num}
                  {a.judgment >= 2 ? ' 🚨' : ''}

                </Button>
                <hr key={i} />
                <Card.Body>
                  <Card.Text key={i}>운행점수 {a.drs}</Card.Text>
                  <Card.Text key={i + 1}>차량점수 {a.vrs}</Card.Text>
                  <Card.Text key={i + 2}>종합점수 {a.ts}</Card.Text>
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
