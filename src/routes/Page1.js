import { useNavigate, Link } from "react-router-dom";
import Mynavbar from "../components/Mynavbar";
import { Button } from "react-bootstrap";
import Data from "../components/Data";
function Page1() {
  const navigate = useNavigate();
  const handle = (k) => {
    navigate(k);
  };

  return (
    <>
      <Mynavbar />
      <Data />
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>1Page</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      {/* <Button href="/">Home</Button>
      <Button href="/page1">menu1</Button>
      <Button href="/page2">menu2</Button>
      <Button href="/page3">menu3</Button> */}

      {/* <button onClick={() => handle("/")}>홈으로</button>
      <button onClick={() => handle("/p2")}>2페이지로</button>
      <button onClick={() => handle("/p3")}>3페이지로</button> */}
    </>
  );
}
export default Page1;
