import React, { useState, useEffect } from "react";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

function First() {
  const [hello, setHello] = useState();
  const [db, setDb] = useState();

  // useEffect(() => {
  //   axios
  //     .get("/api/hello")
  //     .then((response) => setHello(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    axios
      .get("/data")
      .then((response) => setDb(response.data))
      .catch((error) => console.log(error));
  }, []);

    let dblist = JSON.stringify(db);
    
    const dblist1 = JSON.parse()

  //   console.log(typeof dblist);

  //   let dbArr = Object.keys(dblist);
  //   console.log(typeof dblist);

  return (
    <>
      <div>백엔드에서 가져온 데이터입니다 : {dblist}</div>
    </>
  );
}

export default First;
