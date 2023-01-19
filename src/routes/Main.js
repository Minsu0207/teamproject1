import "../components/Main.css";
import Mynavbar from "../components/Mynavbar";
import MySection from "../components/Mysection";
import Mymain from "./Mymain";

function Main(props) {
  return (
    <>
      <Mynavbar />
      <div className="main-bg"></div>
      <MySection />
      {/* {props.db[0]?.car_num} */}
    </>
  );
}
export default Main;


