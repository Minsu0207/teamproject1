import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./Main.css";

function Mappath() {
    const { kakao } = window;
    let { test } = useSelector((state) => { return state })


    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(35.198742898617816,
                    129.12954324249225), // 지도의 중심좌표
                level: 7 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다 
            var latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';

            var resultDiv = document.getElementById('result');
            resultDiv.innerHTML = message;
        });

        let busPositions = [];

        // let a = test.map((a) => {
        //     if (a.status_code != 0) {
        //         busPositions.push(new kakao.maps.LatLng(
        //             a.car_location_GPS_Y, a.car_location_GPS_X
        //         ))
        //     } else {
        //     }
        // })
        // let aobj = Object.assign({}, busPositions)

        // console.log('busPositions', busPositions)
        // console.log('ab', aobj)

        const Point =
            new kakao.maps.LatLng(
                test[0]?.car_location_GPS_Y,
                test[0]?.car_location_GPS_X

            )
        // console.log(Point)
        // 마커 이미지의 주소1
        const markerImageUrl = 'https://img.icons8.com/plasticine/512/bus.png',
            markerImageSize = new kakao.maps.Size(45, 45), // 마커 이미지의 크기
            markerImageOptions = {
                offset: new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
            };
        // 마커 이미지를 생성한다 2
        const markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

        let Point1 = [test.map((a) =>
            new kakao.maps.LatLng(
                a.car_location_GPS_Y, a.car_location_GPS_X
            )
        )]

        console.log(Point1)

        const marker = new kakao.maps.Marker({
            position: Point,    // 마커의 좌표
            image: markerImage, // 마커의 이미지
            map: map // 마커를 표시할 지도 객체
        },);


        // 마커가 지도 위에 표시되도록 설정합니다


        // console.log(test[0]?.status_code)




        let busPath = [test.map((a) =>
            new kakao.maps.LatLng(
                a.car_location_GPS_Y, a.car_location_GPS_X
            )
        )]

        var polyline = new kakao.maps.Polyline({
            path: busPath,// 선을 구성하는 좌표배열 입니다
            strokeColor: 'blue',
            strokeWeight: 5, // 선의 두께 입니다
            strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });







        polyline.setMap(map);
        marker.setMap(map);

        // 하나의 polyline 객체를 전역 변수로 만들고
        // 1번 보기를 눌렀을 때 1번의 path를 polyline.setPath(path); 를 호출하여 경로를 지정 polyline.setMap(map);으로 지도에 표시해줍니다.
        // 삭제를 눌렀을 경우 polyline.setMap(null);을 사용하면 지도에서 제거됩니다.
        // 두번째 방식으로 할 경우에는 polyline.setPath(path) API만 이용해서 가능할 것 같네요.
        // 1번 보기를 클릭한 경우 setPath(1번 path)로 경로를 지정하고
        // 2번 보기를 클릭한 경우 setPath(2번 path)로 경로를 지정하면 됩니다.
        //일반 구간 주의 구간 위험 구간 별로 표시 구현 todo


        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);



    },)


    return (
        <>
            <div
                id="map" style={{
                    width: '80%',
                    height: '630px'
                }}>

            </div>
            <p id='result'></p>
        </>
    );
}

export default Mappath;