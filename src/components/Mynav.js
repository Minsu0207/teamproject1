import { useEffect, useState } from "react";
import { Nav, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Mytable from "./Mytable";
import Mysearch from "./Mysearch";
import Mychart from "./Mychart";
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
            <Mysearch ss={ss} setSs={setSs} />
            <Mytable ss={ss} setSs={setSs} />

          </>
        </div>,


        <div className="tab2">
          <Mychart />
        </div>

        ][tab]}
      </div>

    );

  }
}
export default Mynav;
