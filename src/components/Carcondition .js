import { useSelector } from "react-redux"
import { Table, Container, Row, Col, Card, Button } from "react-bootstrap";
import Mynavbar from "./Mynavbar";
import Chart from "./Chart";
import { useParams } from "react-router-dom"
import CardHeader from 'react-bootstrap/esm/CardHeader';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import axios from "axios";

function Carcondition(props) {
    let { oil } = useSelector((state) => { return state })
    let { vehicle } = useSelector((state) => { return state })
    let { id } = useParams();

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const res = await axios.get(`/drive/${id}`);
            setUsers(res.data); // 데이터는 res.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
    if (!users) return null;



    let Box20 = styled.div`padding : 20px;`;
    let listsafety = users.map((a, i) =>
        a
    )

    let listoil = oil.filter((a) => a.car_num == id)
        .map((a, i) =>
            a
        )

    console.log(listsafety)

    return (
        <>
            <div className="carmain">
                <Mynavbar />
                <Row className="carrow1">
                    <Col lg={4} className="tb1col">
                        <h2 style={{ margin: '15px' }}>
                            {id}번 차량 운행 정보</h2>
                        <Table>
                            <thead className="tb1">
                                <tr className="tr1">
                                    <th>차량번호</th>
                                    <th>운행일자</th>
                                    <th>급가속횟수</th>
                                    <th>급감속횟수</th>
                                    <th>안전운전율</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listsafety.map((a, i) => {
                                    return [
                                        <tr key={i}>
                                            <td>{a.car_num}</td>
                                            <td>{a.date}</td>
                                            <td>{a.rac}</td>
                                            <td>{a.sds}</td>
                                            <td>{a.dsr}</td>
                                        </tr>
                                    ]
                                })}
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="chart"  >
                        <Chart listsafety={listsafety} listoil={listoil} />
                    </Col>
                </Row>

                <Box20 />
                <Box20 />

                <Row className="cardrows">
                    {vehicle.map((a, i) => (
                        <Col>
                            <Card
                                key={i}
                                style={{ width: '10rem' }}
                                border={a.judgment >= 2 ? 'danger' : 'success'}
                                className="mb-3"
                            >
                                <Button href={`/drive/${a.car_num}`} variant="black">
                                    <CardHeader> 차량번호<br></br> {a.car_num}</CardHeader>
                                    <Card.Body>
                                        운행정보<br></br> 조회
                                    </Card.Body>
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )

}

export default Carcondition;