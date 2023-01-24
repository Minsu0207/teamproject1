import { useNavigate } from "react-router-dom";
import Mynavbar from "../components/Mynavbar";
import { Button } from "react-bootstrap";
import Data from "../components/Data";
import Mynav from "../components/Mynav";
import { useEffect, useState } from "react";
function Page1() {
  const navigate = useNavigate();
  const handle = (k) => {
    navigate(k);
  };

  let [fade2, setFade2] = useState('')

  useEffect(() => {
    setFade2('end')
    return () => {
      setFade2('')
    }
  })

  return (
    <>
      <div className={`start ` + fade2}>
        <Mynavbar />
        <div className="page1h1">
          <h1>운전습관 분석을 통한 안전운전 예측 시스템</h1>
          <h2>수집한 빅데이터를 바탕으로 어떤 어떤 방식을 통해 분석할 결과 입니다.</h2>
          <div className="main-bg"></div>
        </div>

        <Mynav />

      </div>
    </>
  );
}
export default Page1;
