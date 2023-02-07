import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Nav, Table } from "react-bootstrap";
import Mynavbar from "./Mynavbar";
import Mychart1 from "./Mychart1";

function Carcondition(props) {
    let { vehicle } = useSelector((state) => { return state })
    let { drive } = useSelector((state) => { return state })
    let { id } = useParams();



    let carlist = drive.filter((a) => a.car_num == id)
        .map((a, i) =>
            a
        )


    return (
        <>
            <Mynavbar />

            {id}번 차량정보
            <div className="tablechart">

                <Table>
                    <thead>
                        <th>차량번호</th>
                        <th>운행일자</th>
                        <th>급가속횟수</th>
                        <th>급감속횟수</th>
                        <th>안전운전율</th>
                        <th>운행점수</th>
                    </thead>
                    <tbody>
                        <td>
                            {carlist.map((a, i) => {
                                return <tr>{a.car_num}</tr>
                            })}
                        </td>
                        <td>
                            {carlist.map((a, i) => {
                                return <tr>{a.date}</tr>
                            })}
                        </td>
                        <td>
                            {carlist.map((a, i) => {
                                return <tr>{a.rac}</tr>
                            })}
                        </td>
                        <td>
                            {carlist.map((a, i) => {
                                return <tr>{a.sds}</tr>
                            })}
                        </td>
                        <td>
                            {carlist.map((a, i) => {
                                return <tr>{a.dsr}</tr>
                            })}
                        </td>
                        <td>
                            {carlist.map((a, i) => {
                                return <tr>{a.durs}</tr>
                            })}
                        </td>
                    </tbody>
                </Table>
                <Mychart1 carlist={carlist} />
            </div>

        </>
    )

}

export default Carcondition;