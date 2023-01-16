import { useNavigate, Link } from "react-router-dom";

function Page2() {
  const navigate = useNavigate();
  const handle = (k) => {
    navigate(k);
  };

  return (
    <>
      <button onClick={() => handle("/")}>홈으로</button>
      <button onClick={() => handle("/p1")}>1페이지로</button>
      <h1>2Page</h1>
    </>
  );
}
export default Page2;
