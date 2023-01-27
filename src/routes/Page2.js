import Mynavbar from "../components/Mynavbar";
import Mymap1 from "../components/Mymap1"
import Mymap from "../components/KakaoMap"

function Page2() {


  return (
    <>
      <Mynavbar />
      <div className="page1h1">
        <h1>운행정보 분석을 통한
          운행 주의구간 알림</h1>
      </div>
      <Mymap />
    </>
  );
}
export default Page2;
