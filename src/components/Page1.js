import { useNavigate, Link } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();
  const handle = (k) => {
    navigate(k);
  };

  return (
    <>
      <div>

        <input type={"search"}></input>

      </div>

      <button onClick={() => handle("/")}>홈으로</button>
      <button onClick={() => handle("/p2")}>2페이지로</button>
      <h1>1Page</h1>
    </>
  );
}
export default Page1;
