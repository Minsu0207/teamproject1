import { useEffect, useState } from "react";
import { DropdownButton, Nav, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Main.css";


function Mynav() {
  let [tab, setTab] = useState(0)

  let db = useSelector((state) => { return state })

  console.log(db)
  return (
    <>
      <Nav variant="pills" defaultActiveKey="/link0" className="nav1">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }}
            eventKey="link0">모든 DB 조회</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">나의 안전등급 확인</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(2) }}
            eventKey="link2" >
            Disabled
          </Nav.Link>
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
                  <th>총주행거리</th>
                  <th>평균 rpm</th>
                  <th>평균 속도</th>
                  <th>최고 속도</th>
                </tr>
              </thead>
              <tbody>
                {
                  db.db.map((a, i) =>
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{a.car_num} 번</td>
                      <td>{a.distance_cum} km</td>
                      <td>{a.rpm_av}</td>
                      <td>{a.speed_av}</td>
                      <td>{a.speed_max}</td>

                    </tr>
                  )
                }


              </tbody>
            </Table>
          </div>,

          <div className="tab2">내용1</div>,
          <div className="tab3">내용2</div>

        ][tab]}
      </div>


    );

  }
}
export default Mynav;
