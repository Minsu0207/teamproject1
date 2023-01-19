import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";
import Page3 from "./routes/Page3";
import Data from "./components/Data";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, } from "react-bootstrap";
function App() {
  let [db, setDb] = useState([]);

  useEffect(() => {
    axios
      .get("/data")
      .then((result) => {
        setDb(result.data);
      })
      .catch(() => console.log("데이터가져오기 실패"));
  }, []);

  let test = db.map((a, i) => {
    return <a db={db[i]} i={i} key={i}></a>
  })

  console.log(test)


  return (
    <>

      <div>
        {db.map((a, i) => {
          return <li db={db[i]} i={i} key={i}></li>
        })}
      </div>
      {/* <Routes>
        <Route path="/" element={<Main db={db} />} />
        <Route path="/page1" element={<Page1 db={db} />} />
        <Route path="/page2" element={<Page2 db={db} />} />
        <Route path="/page3" element={<Page3 db={db} />} />

        <Route path="*" element={<h4>존재하는 않는 페이지 입니다.<br></br>주소를 확인해주세요</h4>} />
      </Routes> */}
    </>
  );
}

export default App;
