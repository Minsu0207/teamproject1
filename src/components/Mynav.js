import { useEffect, useState } from "react";
import { Nav, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Mytable from "./Mytable";
import Mysearch from "./Mysearch";
import "./Main.css";


function Mynav(props) {
  let { db } = useSelector((state) => { return state })
  let { drive } = useSelector((state) => { return state })

  let [tab, setTab] = useState(0)
  let [ss, setSs] = useState('[]')

  ss = [...drive]


  const handleUserInput = (ss) => {
    setSs(ss);
  }



  return (
    <>
      <Nav variant="pills" defaultActiveKey="/link0" className="nav1">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }}
            eventKey="link0">차량별 운행점수</Nav.Link>
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
        {[<div className="tab1">
          <>
            {/* <Mysearch search={search} ss={ss} onUserInput={handleUserInput} /> */}
            <Mysearch ss={ss} setSs={setSs} />
            <Mytable ss={ss} setSs={setSs} />

          </>
        </div>,


        <div className="tab2">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>차량번호</th>
                <th>운행일자</th>
                <th>초당과속횟수</th>
                <th>극가속횟수</th>
                <th>극감속횟수</th>

              </tr>
            </thead>
            <tbody>
              {
                drive.map((a, i) =>
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{a.car_num}</td>
                    <td>{a.date}</td>
                    <td>{a.fss}</td>
                    <td>{a.rac}</td>
                    <td>{a.sds}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>

        ][tab]}
      </div>

    );

  }
}
export default Mynav;
