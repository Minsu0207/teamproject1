import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Test from "./Test";
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

  const [view2, setView2] = useState();

  useEffect(() => {
    axios
      .get("/data")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const view1 =
    data
      ? data.map((props, i) => {
        return (
          <ul>
            <li key={i}>
              {i}.
              차번호 : {props.car_num},
              이동거리 :{props.distance}km
            </li>
          </ul>
        );
      })
      : null;



  // const view2 = view1.map((view1) => {
  //   return (
  //     <div>{view1.car_num}</div>
  //   );
  // })

  console.log(view1)
  // console.log(view2)

  // const view2 = View1.((mvlist) => {
  //   return (
  //     <div key={mvlist.rank}>
  //       <div>{mvlist.movieNm}</div>
  //     </div>
  //   );

  return (
    <>
      <Header />
      <Nav />

      {view1}
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
