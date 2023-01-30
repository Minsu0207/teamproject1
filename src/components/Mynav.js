import { useEffect, useState } from "react";
import { Nav, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Mytable from "./Mytable";
import Mysearch from "./Mysearch";
import "./Main.css";
import axios from "axios";


function Mynav(props) {
  let [tab, setTab] = useState(1)
  let [search, setSearch] = useState('')
  let [ss, setSs] = useState('')

  let { db } = useSelector((state) => { return state })

  useEffect(() => {
    axios.get("/data").then((res) => {
      setSs(res.data)
    });
  }, [])

  const handleUserInput = (ss) => {
    setSs(ss);
  }


  return (
    <>
      <Nav variant="pills" defaultActiveKey="/link0" className="nav1">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }}
            eventKey="link0">모든 차량 조회</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">차량별 안전등급 확인</Nav.Link>
        </Nav.Item>

      </Nav>
      <TabContent tab={tab} />
    </>
  );


  function TabContent({ tab }) {
    let [fade, setFade] = useState('')

    useEffect(() => {
      setTimeout(() => { setFade('end1') }, 100)
      return () => { setFade('') }
    }, [tab])

    return (
      <div className={`start1 ${fade}`}>
        {[
          <div className="tab1">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>차량번호</th>
                  <th>평균속도</th>
                  <th>급가속횟수</th>
                  <th>급감속횟수</th>
                  <th>x좌표</th>
                  <th>y좌표</th>
                  <th>결과값</th>
                </tr>
              </thead>
              <tbody>
                {
                  db.map((a, i) =>
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{i}</td>
                      <td>{i}</td>
                      <td>{i}</td>
                      <td>{i}</td>
                      <td>{a.y_gps}</td>
                      <td>{a.x_gps}</td>
                      <td>{a.result}</td>
                    </tr>
                  )
                }

              </tbody>

            </Table>
          </div>,

          <div className="tab2">
            <>
              <Mysearch search={search} ss={ss} onUserInput={handleUserInput} />
              <Mytable />

            </>
          </div>,


        ][tab]}
      </div>


    );

  }
}
export default Mynav;
