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
useEffect
//앱을 실행했을때 처음 작동하기 위한
useNavigate   
// 이벤트 발생시(ex 클릭) url을 조작
Link
//<Link to="/path"></Link>
useParams
//let { id } = useParams();
//url 파라미터에 입력한값 = id로 출력

// for(let [k,v] of Object.entries(item))

probs

{ 진행 과정 }
리액트 웹 생성
페이지 구성

  
//Link


        import axios from 'axios'
        import { useState } from 'react'
import { useParams } from 'react-router-dom'



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




//백 프론트연결

백

프론트
npm install http - proxy - middleware--save
import axios 

axios
  .get(/url)  // url or port 불러오기
  .then(response => { })  //stats에 담기 뭘할꺼냐
  .catch((error) => { console.error(error) }) //안될때
  

setProxy.js 파일을 생성
(필요한진 모르겠음)

오브젝트 타입 읽기
JSON.stringify("파일명")



  * 오답 노트
첫 랜더링시 빈값이면 아예 다 리딩을안해버려서,
state 변수에 빈 [] 배열로 해놓고 해결함.