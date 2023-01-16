import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Test from "./Test";
import "./css/Main.css";

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

  return (
    <>
      <Header />
      <Nav />
      <Test />

  
      <main>
        <h1>TeamProject Main</h1>
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
