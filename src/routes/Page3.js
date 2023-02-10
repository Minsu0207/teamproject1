import { useState } from "react";
import { Nav } from "react-bootstrap";
import KakaoMap from "../components/KakaoMap";

function Page3() {

  let [tab, setTab] = useState(1)

  return (
    <>
      <Nav variant="pills" defaultActiveKey="/link0" className="nav3">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">운행주의구간확인</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </>
  );



  function TabContent({ tab }) {
    return (
      <>
        {[
          <div className="tab3-1"><KakaoMap /></div>,
        ][tab]}

      </>
    );

  }

}
export default Page3;
