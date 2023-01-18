import React, { useState, useEffect } from "react";
import axios from "axios";

function First() {
  const [hello, setHello] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/hello")
  //     .then((response) => setHello(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    axios
      .get("/data")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  let db = JSON.stringify(data);
  // console.log(data)

  //화면에 출력할 정보를 담을 오브젝트 생성
  const List = {};
  //필요한 키값 불러오기
  const key1 = [
    "car_num",
    "distance",
    "distance_cum",
    "speed_av",
    "speed_max",
    "opertating_time",
    "stop_num",
    "stop_time",
    "stop_rate",
    "drive_time",
    "rpm_max",
    "rpm_av",
    "result",
  ];

  //key에 해당하는 value 추출
  for (let k of key1) {
    List[k] = db[k];
  }

  // console.log(List)

  // console.log(typeof (data))  //obj
  // console.log(List)

  //화면에 출력할 내용 jsx로 만들기
  let View = [];

  for (let [k, v] of Object.entries(List)) {
    View.push(
      <li key={List.car_num}>
        <span>{k}</span>
        <span>{v}</span>
      </li>
    );
  }
  useEffect(() => { }, []);

  return (
    <>
      {/* <div>백엔드에서 가져온 데이터입니다 : {db}</div> */}
      {/* {View} */}

      {data
        ? data.map((props) => {
          return (
            <ul>
              <li>
                차번호 : {props.car_num} 이동거리 :{props.distance}km
              </li>
            </ul>
          );
        })
        : null}
    </>
  );
}

export default First;
