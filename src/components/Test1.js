import React, { useState, useEffect } from "react";
import "./css/Test1.css";
function Test1() {
  let [글제목, 글제목변경] = useState([
    "남자코트추천",
    "부대점심맛집",
    "파이썬독학",
  ]);

  let [cnt, setCnt] = useState(0);
  let [modal, setModal] = useState(false);

  let [title] = useState(0);

  return (
    <>
      <div>
        <h1>ReactProject</h1>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4 onClick={() => { setModal(!modal) }}>{a}</h4>
            <span onClick={() => { setCnt(cnt + 1) }}>🧡</span>{cnt}
            <p>2월 7일</p>
          </div>
        );
      })}

      {
        modal == true ? <Modal 글제목={글제목} title={title} /> : null
      }

    </>
  );
}

export default Test1;

function Modal(props) {
  return (
    <div className="Mo">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}
