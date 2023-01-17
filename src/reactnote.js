{ 터미널 }
npx create-react-app 프로젝트명    리액트 웹 앱 생성
npm install react - router - dom    3페이지 구성을 위해 설치


{ 사용 함수 }
onclick
Route
BrowserRouter
// URL과 UI를 새로고침 없이 동기화
useState
let [cnt,count]=useState(0)
ex) <span onClick = {()=>{count(cnt+1)}}></span>
//함수형 컨포넌트 상태관리가능

useNavigate   
// 이벤트 발생시(ex 클릭) url을 조작
Link
useParams

// for(let [k,v] of Object.entries(item))

probs

{ 진행 과정 }
리액트 웹 생성
페이지 구성

  
//Link
<Link to="/">
      <button>홈화면으로</button>
      </Link>

        import { useState } from 'react'
// 필요한 정보 뿌리기
import weather from '../DB/weather.json';

export default function WeatherDay(props) {
  const d = props.d;
  const witem = weather.response.body.items.item[0];
  //item배열의 가져올값이 있는곳 경로
  const items = [];
  const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Pm`];
  // console.log(keys);
  for(let k of keys) {
    items.push(witem[k]);
  }


  로컬이 아닌 서버로부터 JSON 파일을 받기 위해서는 Axios, Fetch, XMLHttpRequest를 이용해야 합니다.

  import

  let obj = {};
  console.log('object 생성 확인 =>', obj)  
  let obglist ={
    "key1":value1,
    "key2":value2,
    "key3":value3,
  }
for (let k in obglist){
  console.log(k,objlist[k])
  if (k=== "filevalue") break
}

for (let [k,v] of Object.entries(objlist)){
  console.log(k,v);
  if(k === 'filevalue') break
}

let lis = [] ;
  for(let [k, v] of Object.entries(mv)) {
    lis.push(
    <li key={k}>
      <span className='mvLiK'>{k}</span> 
      <span className='mvLiV'>{v}</span>
    </li>) ;
  }

  return (
    <>
      <ul className='ul1'>
        <li className='li1'>{d}일 후 오전 강수량 {items[0]}%</li>
        <li className='li1'>{d}일 후 오후 강수량 {items[1]}%</li>
        <li className='li1'>{d}일 후 오전 날씨 예보  {items[2]}</li>
        <li className='li1'>{d}일 후 오후 날씨 예보  {items[3]}</li>
      </ul>
    </>
  );

}



//백 프론트연결

백

프론트
npm install http - proxy - middleware--save

setProxy.js 파일을 생성
(필요한진 모르겠음)

오브젝트 타입 읽기
JSON.stringify("파일명")