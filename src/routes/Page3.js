import { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Mymap from "../components/Mymap";

function Page3() {
  let [tab, setTab] = useState(1)

  return (
    <>
      <div className="nav-link2"
        onClick={() => { setTab(0) }} eventKey="link0">운전운전을 위한 운행주의 지점 확인</div>
      <TabContent tab={tab} />
    </>
  );

  function TabContent({ tab }) {
    return (
      <>
        {[
          <div className="tab3-1"><Mymap /></div>,
          <>
            <Container>
              <Row>
                <Col>
                  <Alert variant="light" className="alert3-1">
                    <p className="mb-1">
                      교통안전공단에 DTG 운행기록 및 운행관제, 차량배차 관리, 운행분석 통계를 실시간 제공하여<br />
                      유류비 절감은 물론 교통사고를 예방합니다.
                    </p>
                  </Alert>
                </Col>
              </Row>
              <Row>
                <img
                  className="servicemain"
                  alt=""
                  src={process.env.PUBLIC_URL + "/img/1-3.png"}
                />
              </Row>
            </Container>
          </>,]
        [tab]}

      </>
    );

  }

}
export default Page3;
