import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
const { kakao } = window;

function Mymap1() {
    useEffect(() => {
        const mapContainer = document.getElementById('map'),
            // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(
                    "35.198742898617816",
                    "129.12954324249225"),
                // 지도의 중심좌표
                level: 7 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);


        // //마커 좌표
        // var positions = gps1.gps1.map(function (a, i) {
        //     return (new kakao.maps.LatLng(
        //         a.GPS_Y, a.GPS_X)
        //     );
        // })

        // var imageSrc = "https://img.icons8.com/plasticine/512/bus.png";

        // for (var i = 0; i < positions.length; i++) {

        //     // 마커 이미지의 이미지 크기 입니다
        //     var imageSize = new kakao.maps.Size(45, 45);

        //     // 마커 이미지를 생성합니다    
        //     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        //     // 마커를 생성합니다
        //     var marker = new kakao.maps.Marker({
        //         map: map, // 마커를 표시할 지도
        //         position: positions[i],  // 마커를 표시할 위치
        //         image: markerImage, // 마커 이미지 
        //         opacity: 1// 마커 투명도(0- 1)
        //     });
        // }



        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        //지도 확대축소
        const myPath =
            [new kakao.maps.LatLng(path.path[0].x, path.path[0].y),
            new kakao.maps.LatLng(path.path[1].x, path.path[1].y),
            new kakao.maps.LatLng(path.path[2].x, path.path[2].y),
            new kakao.maps.LatLng(path.path[3].x, path.path[3].y),
            new kakao.maps.LatLng(path.path[4].x, path.path[4].y)]

        //위에코드를 map 함수를 사용해 gps값 가져와서 path 출력

        const myPath1 = gps1.gps1.map(function (a, i) {
            return (new kakao.maps.LatLng(
                a.GPS_Y, a.GPS_X)
            );
        })

        // 지도에 선을 표시한다
        const polyline = new kakao.maps.Polyline({
            map: map, // 선을 표시할 지도 객체 
            path: [ // 선을 구성하는 좌표 배열
                myPath1
            ],
            strokeWeight: 2, // 선의 두께
            strokeColor: '#FF0000', // 선 색
            strokeOpacity: 0.9, // 선 투명도
            strokeStyle: 'solid', // 선 스타일
            endArrow: 'True'//화살표

        });
        //{1이면 ? 칼라가 흰색 : null }
        // marker.setMap(map); //마커 지도에 출력
        // polyline.setMap(map); //폴리라인 지도에 출력
    }, [])

    let gps = useSelector((state) => { return state })
    let gps1 = useSelector((state) => { return state })
    let path = useSelector((state) => { return state })



    return (
        <>
            <div
                id="map" style={{
                    width: '100%',
                    height: '800px'
                }}>
            </div>

        </>
    );
}

export default Mymap1

