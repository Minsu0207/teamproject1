import { useSelector } from "react-redux"
import { Table, Container, Row, Col, Card, Button } from "react-bootstrap";
import Mynavbar from "./Mynavbar";
import Mychart1 from "./Mychart1";
import { useParams } from "react-router-dom"
import CardHeader from 'react-bootstrap/esm/CardHeader';
import styled from 'styled-components';
function Carcondition(props) {
    let { drive } = useSelector((state) => { return state })
    let { oil } = useSelector((state) => { return state })
    let { vehicle } = useSelector((state) => { return state })
    let { id } = useParams();
    let Box20 = styled.div`padding : 20px;`;
    let listsafety = drive.filter((a) => a.car_num == id)
        .map((a, i) =>
            a
        )

    let listoil = oil.filter((a) => a.car_num == id)
        .map((a, i) =>
            a
        )

    return (
        <>
            <Mynavbar />
            <Container>
                <Row>
                    <Col>
                        <h2 style={{ margin: '15px' }}>
                            {id}번 차량 운행 정보</h2>
                        <table>
                            <tbody className="tb1">
                                <tr>
                                    <th>차량번호</th>
                                    <th>운행일자</th>
                                    <th>급가속횟수</th>
                                    <th>급감속횟수</th>
                                    <th>안전운전율</th>
                                </tr>
                                <tr>
                                    <td>
                                        {listsafety.map((a, i) => {
                                            return <tr>{a.car_num}</tr>
                                        })}
                                    </td>
                                    <td>
                                        {listsafety.map((a, i) => {
                                            return <tr>{a.date}</tr>
                                        })}
                                    </td>
                                    <td>
                                        {listsafety.map((a, i) => {
                                            return <tr>{a.rac}</tr>
                                        })}
                                    </td>
                                    <td>
                                        {listsafety.map((a, i) => {
                                            return <tr>{a.sds}</tr>
                                        })}
                                    </td>
                                    <td>
                                        {listsafety.map((a, i) => {
                                            return <tr>{a.dsr}</tr>
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col>
                        <Mychart1 listsafety={listsafety} listoil={listoil} />
                    </Col>
                </Row>
            </Container>
            <Box20 />
            <Box20 />
            <Box20 />

            <Row>
                {vehicle.map((a, i) => (
                    <Col>
                        <Card
                            key={i}
                            style={{ width: '10rem' }}
                            border={a.judgment >= 2 ? 'danger' : 'success'}
                            className="mb-3"
                            bg={a.judgment >= 2 ? 'danger' : 'success'}
                            text='white'
                        >
                            <CardHeader> 차량번호 {a.car_num}</CardHeader>
                            <Card.Body>
                                <Button href={`${a.car_num}`} variant="outline-light">
                                    운행정보 조회
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </>
    )

}

export default Carcondition;