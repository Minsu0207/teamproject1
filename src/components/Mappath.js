import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./Main.css";

function Mappath() {
    const { kakao } = window;
    let { db } = useSelector((state) => { return state })



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

        const Point = new kakao.maps.LatLng(
            db[0]?.y_gps,
            db[0]?.x_gps,
        )
        // 마커 이미지의 주소1
        const markerImageUrl = 'https://img.icons8.com/plasticine/512/bus.png',
            markerImageSize = new kakao.maps.Size(45, 45), // 마커 이미지의 크기
            markerImageOptions = {
                offset: new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
            };
        // 마커 이미지를 생성한다 2
        const markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

        const marker = new kakao.maps.Marker({
            position: Point,    // 마커의 좌표
            image: markerImage, // 마커의 이미지
            map: map // 마커를 표시할 지도 객체
        },);


        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        const linePath = [db.map(function (a, i) {
            return (new kakao.maps.LatLng(
                a.y_gps, a.x_gps)
            );
        })]

        const linePath1 = [
            new kakao.maps.LatLng(35.2376, 129.16366),
            new kakao.maps.LatLng(35.2200, 129.16000)
        ];

        const linePath2 = [
            new kakao.maps.LatLng(35.2376, 129.13666),
            new kakao.maps.LatLng(35.2132, 129.13330)
        ]

        var polyline1 = new kakao.maps.Polyline({
            path: linePath1, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 10, // 선의 두께 입니다
            strokeColor: 'red', // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });

        var polyline2 = new kakao.maps.Polyline({
            path: linePath2, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 10, // 선의 두께 입니다
            strokeColor: 'blue', // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });
        console.log(linePath)


        var polyline = new kakao.maps.Polyline({
            path: linePath, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: 'black', // 선의 색깔입니다
            strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });

        polyline.setMap(map);
        polyline1.setMap(map);
        polyline2.setMap(map);

        // 하나의 polyline 객체를 전역 변수로 만들고
        // 1번 보기를 눌렀을 때 1번의 path를 polyline.setPath(path); 를 호출하여 경로를 지정 polyline.setMap(map);으로 지도에 표시해줍니다.
        // 삭제를 눌렀을 경우 polyline.setMap(null);을 사용하면 지도에서 제거됩니다.
        // 두번째 방식으로 할 경우에는 polyline.setPath(path) API만 이용해서 가능할 것 같네요.
        // 1번 보기를 클릭한 경우 setPath(1번 path)로 경로를 지정하고
        // 2번 보기를 클릭한 경우 setPath(2번 path)로 경로를 지정하면 됩니다.
        //일반 구간 주의 구간 위험 구간 별로 표시 구현 todo


        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);




        var content =
            '<button>버스종점!</button>';
        // '<div class="overlaybox">' +
        // '    <div class="boxtitle">버스 운행정보</div>' +
        // '    <div class="first">' +
        // '        <div class="triangle text">1</div>' +
        // '        <div class="movietitle text">115-1번</div>' +
        // '    </div>' +
        // '    <ul>' +
        // '        <li class="up">' +
        // '            <span class="number">2</span>' +
        // '            <span class="title"></span>' +
        // '            <span class="arrow up"></span>' +
        // '            <span class="count">2</span>' +
        // '        </li>' +
        // '        <li>' +
        // '            <span class="number">3</span>' +
        // '            <span class="title"></span>' +
        // '            <span class="arrow up"></span>' +
        // '            <span class="count">6</span>' +
        // '        </li>' +
        // '        <li>' +
        // '            <span class="number">4</span>' +
        // '            <span class="title"></span>' +
        // '            <span class="arrow up"></span>' +
        // '            <span class="count">3</span>' +
        // '        </li>' +
        // '    </ul>' +
        // '</div>';

        // 커스텀 오버레이가 표시될 위치입니다 
        var position = new kakao.maps.LatLng(35.2325,
            129.169);

        // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: content
        });

        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);

    }, [])


    return (
        <>
            <div
                id="map" style={{
                    width: '80%',
                    height: '630px'
                }}>

            </div>
            <p><em>지도 클릭해서 gps값 확인</em></p>
            <p id='result'></p>
        </>
    );
}

export default Mappath;





