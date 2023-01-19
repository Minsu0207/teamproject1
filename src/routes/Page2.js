import { useNavigate, Link } from "react-router-dom";
import Mynavbar from "../components/Mynavbar";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

function Page2(props) {
  const navigate = useNavigate();
  const handle = (k) => {
    navigate(k);
  };

  let [timer, setTimer] = useState(true)

  useEffect(() => {
    let a = setTimeout(() => { setTimer(false) }, 3000)

    return () => {
      <>
        clearTimeout(a)
      </>
    }
  },)


  return (
    <>
      <Mynavbar />
      {
        timer == true
          ?
          <div>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
          </div>
          : null
      }
      <h1>2page</h1>
    </>
  );
}
export default Page2;
