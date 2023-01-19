import { useNavigate, Link } from "react-router-dom";
import Mynavbar from "../components/Mynavbar";

function Page3() {
  const navigate = useNavigate();
  const handle = (k) => {
    navigate(k);
  };

  return (
    <>
      <Mynavbar />
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>3Page</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      {/* <button onClick={() => handle("/")}>홈으로</button>
      <button onClick={() => handle("/p2")}>2페이지로</button>
      <button onClick={() => handle("/p3")}>3페이지로</button> */}
    </>
  );
}
export default Page3;
