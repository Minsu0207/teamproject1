import "../components/Main.css";
import Mynavbar from "../components/Mynavbar";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { useState } from "react";
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"
import Page5 from "../components/Mychart2"
import styled from 'styled-components';
import Mytable from "../components/Mytable";
import { useSelector } from "react-redux";
function Main() {
  let Box20 = styled.div`padding : 5  px;`;
  const { drive } = useSelector((state) => { return state })
  let [tab, setTab] = useState(1)
  return (
    <>
      <Mynavbar />
      <Box20 />
      <Tab.Container id="left-tabs-example" defaultActiveKey="p1">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="p1">안전등급확인</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="p2">모든차량조회</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="p3">운행 정보 분석</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="p4">서비스소개</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="p1">
                <Page1 />
              </Tab.Pane>
              <Tab.Pane eventKey="p2">
                <Page2 />
              </Tab.Pane>
              <Tab.Pane eventKey="p3" >
                <Page3 />
              </Tab.Pane>
              <Tab.Pane eventKey="p4">
                <Page4 />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}
export default Main;


