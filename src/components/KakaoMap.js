import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

let busmarker = null;

function KakaoMap() {
    const { kakao } = window;
    let { gps } = useSelector((state) => { return state })
    const [kakaoMap, setKakaoMap] = useState(null);
    const [, setMarkers] = useState([]);
    const [, setPolyline] = useState([]);
    const [markerPositions, setMarkerPositions] = useState([]);
    const [buspaths, setBuspaths] = useState([]);
    let [cnt, setCnt] = useState(0);


    const marker = gps.filter((a) => a.sra !== 0).map((a) => {
        return [a.car_location_GPS_Y, a.car_location_GPS_X];
    }
    )

    const marker2 = gps.map((a) => {
        return [a.car_location_GPS_Y, a.car_location_GPS_X];
    })


    //운행판별 sra값이 0이 아닌 구간에 대해 주의 마커 필터링

    const path = gps.filter((a) => a).map((a) => {
        return [a.car_location_GPS_Y, a.car_location_GPS_X];
    }
    )
    //버스 운행경로 위도경도 값 배열에 저장
    // information_date



    useEffect(() => {
        const center = new kakao.maps.LatLng(35.1988, 129.12395);
        // 지도의 중심좌표
        const mapContainer = document.getElementById('map');
        const options = {
            center,
            level: 7
            // 지도의 확대 레벨
        };

        const map = new kakao.maps.Map(mapContainer, options);
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        // setMapCenter(center);
        setKakaoMap(map);

        // 교통정보 지도로 출력변경
        // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    }, [])


    useEffect(() => {
        if (kakaoMap === null) {
            return;
        }
        // save center position
        const center = kakaoMap.getCenter();


        // relayout and...
        kakaoMap.relayout();
        // restore
        kakaoMap.setCenter(center);

    }, [kakaoMap]);

    useEffect(() => {
        if (kakaoMap === null) {
            return;
        }

        const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));
        const paths = buspaths.map(pos => new kakao.maps.LatLng(...pos));


        const path = [gps.map((a) =>
            new kakao.maps.LatLng(
                a.car_location_GPS_Y,
                a.car_location_GPS_X
            )
        )]

        // #DC143C   https://img.icons8.com/plasticine/512/bus.png
        setPolyline(polylines => {
            polylines.forEach(i => i.setMap(null));
            return paths.map(() => new kakao.maps.Polyline({
                map: kakaoMap,
                path: path, //선의 구성하는 좌표 배열 입니다.
                strokeColor: 'indigo', //선의 색상입니다.
                strokeWeight: 3, // 선의 두께 입니다
                strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: 'line', // 선의 스타일입니다
                endArrow: true,
            })

            );
        });

        // 마커 중복 삭제
        console.log('busmarker', busmarker)
        if (busmarker != null)
            busmarker.setMap(null);


        var marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(gps[10]?.car_location_GPS_Y, gps[10]?.car_location_GPS_X),
            image: new kakao.maps.MarkerImage(
                'https://cdn2.iconfinder.com/data/icons/3d-transport/512/Bus-Blue.png',
                new kakao.maps.Size(130, 130),

            )
        });

        busmarker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(35.1988, 129.12395),
            image: new kakao.maps.MarkerImage(
                'https://cdn2.iconfinder.com/data/icons/3d-transport/512/Bus-Blue.png',
                new kakao.maps.Size(130, 130),

            )
        });

        console.log('marker', marker)
        console.log('busmarker', busmarker)








        const markerImageUrl = 'https://cdn2.iconfinder.com/data/icons/alert-message/64/siren-light-exclamation-icon-512.png',
            markerImageSize = new kakao.maps.Size(35, 35), // 마커 이미지의 크기
            markerImageOptions = {
                offset: new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
            };
        // 마커 이미지를 생성
        const markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);



        setMarkers(markers => {
            // clear prev markers
            markers.forEach(i => i.setMap(null));
            // assign new markers
            return positions.map(
                position => new kakao.maps.Marker({
                    map: kakaoMap,
                    position,
                    image: markerImage,
                    opacity: 1,
                })
            );
        });

        busmarker.setMap(kakaoMap);
        marker.setMap(kakaoMap);



    }, [kakaoMap, markerPositions, buspaths]);

    return (
        <>
            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                <ToggleButton onClick={() => setBuspaths(path)} id="tbg-check-1" value={1}>
                    버스 운행 경로 보기
                </ToggleButton>
                <ToggleButton onClick={() => setBuspaths([])} id="tbg-check-2" value={2}>
                    운행경로 지우기
                </ToggleButton>

            </ToggleButtonGroup>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mb-2">
                <ToggleButton onClick={() => setMarkerPositions(marker)} id="tbg-radio-1" value={1}>
                    운행 주의 구간 보기
                </ToggleButton>
                <ToggleButton onClick={() => setMarkerPositions([])} id="tbg-radio-2" value={2}>
                    마커 지우기
                </ToggleButton>
            </ToggleButtonGroup>

            <div
                id="map"
                style={{
                    width: '80vw',
                    height: '70vh'
                }}></div>
        </>
    )
}

export default KakaoMap;