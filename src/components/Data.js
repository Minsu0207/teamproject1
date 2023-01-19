import axios from "axios";
import React, { useState, useEffect } from "react";

function Data() {
  let [db, setDb] = useState([]);

  useEffect(() => {
    axios
      .get("/data")
      .then((result) => {
        setDb(result.data);
      })
      .catch(() => console.log("데이터가져오기 실패"));
  }, []);

  let data = db.map((props, i) => {
    return (
      <li key={i}>
        {i + 1}번 차량번호
        {props.distance}:
        {props.car_num}:
        {props.distance_cum}:
        {props.opertating_time}:
        {props.result}:
        {props.rpm_av}:
        {props.rpm_max}:
        {props.speed_av}:
        {props.speed_max}:
        {props.stop_num}:
        {props.stop_rate}:
        {props.stop_time}:
      </li>
    );
  });

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      {db[0]?.car_num}
      {db[0]?.speed_av}
      {/* {data[0]} */}
      {data}
    </>
  );
}
export default Data;
