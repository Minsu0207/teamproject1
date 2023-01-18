import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav1";
import "./Main.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Main() {
  const [db, setDb] = useState([]);

  useEffect(() => {
    axios
      .get("/data")
      .then((response) => setDb(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (k) => {
    const url = {
      page1: "/p1",
      page2: "/p2",
    };
    navigate(url(k));
  };

  const navigate = useNavigate();

  let data = db.map((props, i) => {
    return (
      <li key={i}>
        {i + 1}번 차량번호:{props.car_num}
        최대속도:{props.speed_max}
      </li>
    );
  });

  return (
    <>
      {data[0]}
      {data[1]}
      {data[2]}
      {data[3]}

      <h2>page이동</h2>

      <Link to="p1">
        <button>운전자별 인지능력평가</button>
      </Link>
      <Link to="p2">
        <button>타이어 마모도 조회</button>
      </Link>

      <h2>page이동2</h2>
      <button onClick={() => handleClick("page1")}>page1</button>
      <button onClick={() => handleClick("page2")}>page2</button>
    </>
  );
}
export default Main;
