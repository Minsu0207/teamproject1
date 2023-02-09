import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Grade() {
    let { vehicle } = useSelector((state) => { return state })
    let Box20 = styled.div`padding : 10px;`;

    return (
        <>
            <Container>
                <Box20 />
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
                                    <Button href={`/drive/${a.car_num}`} variant="outline-light">
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

export default Grade;