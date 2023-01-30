import { useEffect, useState } from "react";
import { Nav, Table } from "react-bootstrap";
import "./Main.css";
import Mappath from "./Mappath";
import Mappath1 from "./Mappath1";
import Mapbus from "./Mapbus";



function Mynav1() {
  let [tab, setTab] = useState(0)

  return (
    <>
      <Nav variant="pills" defaultActiveKey="/link0" className="nav1">
        <Nav.Item>

          <Nav.Link onClick={() => { setTab(0) }}
            eventKey="link0">버스이동경로</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버스모의주행시작</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link onClick={() => { setTab(2) }}
            eventKey="link2" >
            Disabled
          </Nav.Link>
        </Nav.Item> */}
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
          <div className="tab1"><Mappath /></div>,
          <div className="tab2"><Mapbus /></div>,
          <div className="tab3">내용2</div>

        ][tab]}
      </div>


    );

  }
}
export default Mynav1;
