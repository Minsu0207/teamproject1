import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import "./css/Main.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Main() {
  const handleClick = (k) => {
    const url = {
      page1: "/p1",
      page2: "/p2",
    };
    console.log(k);
    navigate(url(k));
  };

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/data")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  let db = JSON.stringify(data);
  // console.log(data)

  const viewlist = data.map((key) => {
    return <li> {key}</li>;
  });

  return (
    <>
      <Header />
      <Nav />

      {data
        ? data.map((props) => {
            return (
              <ul>
                <li>{props.car_num}</li>
              </ul>
            );
          })
        : null}

      <main>
        <h1 onClick={() => setData(data)}>TeamProject Main</h1>
      </main>

      <h2>page이동</h2>

      <Link to="p1">
        <button className="bt1">운전자별 인지능력평가</button>
        <br></br>
      </Link>
      <Link to="p2">
        <button className="bt2">타이어 마모도 조회</button>
      </Link>

      {/* <h2>page이동2</h2>
      <button className="bt1" onClick={() => handleClick("page1")}>
        page1
      </button>
      <button onClick={() => handleClick("page2")}>page2</button> */}
    </>
  );
}
export default Main;
