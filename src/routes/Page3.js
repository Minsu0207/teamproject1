import { useState } from "react";
import { Nav } from "react-bootstrap";
import PathMap from "../components/PathMap";
import Gobus from "../components/Gobus";

function Page3() {

  let [tab, setTab] = useState(0)

  return (
    <>
      <Nav variant="pills" defaultActiveKey="/link0" className="nav3">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }}
            eventKey="link0">운행주의구간확인</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버스 모의주행</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </>
  );



  function TabContent({ tab }) {
    return (
      <>
        {[
          <div className="tab3-1"><PathMap /></div>,
          <div className="tab3-2"><Gobus /></div>,

        ][tab]}

      </>
    );

  }

}
export default Page3;
