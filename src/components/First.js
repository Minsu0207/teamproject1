import React, { useState, useEffect } from "react";
import axios from "axios";

function First() {
<<<<<<< HEAD
  const [hello, setHello] = useState("");
=======
  const [hello, setHello] = useState('');
>>>>>>> 7c068251e5541d4d889a8678ac32d3dd13918fbe
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

<<<<<<< HEAD
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

=======

  let db = JSON.stringify(data)
  // console.log(data)

  //화면에 출력할 정보를 담을 오브젝트 생성
  const List = {};
  //필요한 키값 불러오기
  const key1 = ["car_num", "distance", "distance_cum", "speed_av", "speed_max",
    "opertating_time", "stop_num", "stop_time", "stop_rate", "drive_time",
    "rpm_max", "rpm_av", "result"];

>>>>>>> 7c068251e5541d4d889a8678ac32d3dd13918fbe
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
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 7c068251e5541d4d889a8678ac32d3dd13918fbe
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
<<<<<<< HEAD
              <li>
                차번호 : {props.car_num} 이동거리 :{props.distance}km
              </li>
            </ul>
          );
        })
        : null}
=======
              <li>차번호 : {props.car_num} 이동거리 :{props.distance}km</li>
            </ul>
          )
        })
        : null
      }

>>>>>>> 7c068251e5541d4d889a8678ac32d3dd13918fbe
    </>
  );
}

export default First;

