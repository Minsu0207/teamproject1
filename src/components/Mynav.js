import { useEffect, useState } from "react";
import { DropdownButton, Nav, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Main.css";


function Mynav() {
  let [tab, setTab] = useState(0)

  let { db } = useSelector((state) => { return state })

  // console.log(db)
  // console.log(typeof (db))

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
                      <td>{a.y_gps}</td>
                      <td>{a.x_gps}</td>
                      <td>{a.result}</td>
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
