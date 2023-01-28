import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Mynavbar from './Mynavbar';
const { kakao } = window;

function Mappath() {
    let { db } = useSelector((state) => { return state })

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
        //마커 좌표
        const Point = new kakao.maps.LatLng(
            db[0]?.y_gps, db[0]?.x_gps
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

        // const zoomControl = new kakao.maps.ZoomControl();
        // map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        //지도 확대축소

        const myPath = db.map(function (a, i) {
            return (new kakao.maps.LatLng(
                a.y_gps, a.x_gps)
            );
        })
        // console.log(db)
        const color = () => {
            db.map(function (a, i) {
                // console.log(db[i]?.result % 2 == 0)
                if (db[i]?.result % 2 == 1) {
                    return '##FF00FF'
                } else {
                    return '#800080'
                }
            })
        }

        // 지도에 선을 표시한다
        const polyline = new kakao.maps.Polyline({
            map: map, // 선을 표시할 지도 객체 
            path: myPath, // 선을 구성하는 좌표 배열
            strokeWeight: 3, // 선의 두께
            strokeColor: '#FF00FF', // 선 색
            // strokeColor: color(), // 선 색
            strokeOpacity: 1, // 선 투명도
            strokeStyle: 'solid', // 선 스타일
            endArrow: 'True'//화살표

        });

        //strokeColor를 변화가능한 state나 props로 주고
        //{1이면 ? strokeColor:red : null }
        marker.setMap(map); //마커 지도에 출력
        polyline.setMap(map); //폴리라인 지도에 출력


    }, [])

    return (
        <>
            <div
                id="map" style={{
                    width: '90%',
                    height: '800px'
                }}>

            </div>
        </>
    );
}

export default Mappath;





