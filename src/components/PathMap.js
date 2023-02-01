import React, { useState } from "react";
import { useSelector } from 'react-redux';
import KakaoMap from "./KakaoMap";
import "./Main.css";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


export default function MapPath() {
    const [visible, setVisible] = useState(true);

    const [mapSize, setMapSize] = useState([700, 700]);
    const [markerPositions, setMarkerPositions] = useState([]);
    const [buspaths, setBuspaths] = useState([]);

    const { test } = useSelector((state) => { return state })

    const marker1 = test.filter((a) => a.sra !== 0).map((a) => {
        return [a.car_location_GPS_Y, a.car_location_GPS_X];
    }
    )
    //운행판별 sra값이 0이 아닌 구간에 대해 주의 마커 필터링
    // console.log(marker1)

    const path1 = test.filter((a) => a).map((a) => {
        return [a.car_location_GPS_Y, a.car_location_GPS_X];
    }
    )
    //버스 운행경로 위도경도 값 배열에 저장



    return (
        <>
            <div>

                <br />
                <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                    <ToggleButton onClick={() => setVisible(!visible)} id="tbg-check-1" value={1}>
                        지도 숨기기
                    </ToggleButton>
                    <ToggleButton onClick={() => setMapSize([900, 900])} id="tbg-check-2" value={2}>
                        크게보기
                    </ToggleButton>
                    <ToggleButton onClick={() => setMapSize([500, 500])} id="tbg-check-3" value={3}>
                        작게보기
                    </ToggleButton>
                </ToggleButtonGroup>
                <br />
                <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                    <ToggleButton onClick={() => setBuspaths(path1)} id="tbg-check-1" value={1}>
                        버스 운행 경로 보기
                    </ToggleButton>
                    <ToggleButton onClick={() => setBuspaths([])} id="tbg-check-2" value={2}>
                        운행경로 지우기
                    </ToggleButton>
                    {/* <ToggleButton id="tbg-check-3" value={3}>
                        Checkbox 3 (pre-checked)
                    </ToggleButton> */}
                </ToggleButtonGroup>
                <br />
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mb-2">
                    <ToggleButton onClick={() => setMarkerPositions(marker1)} id="tbg-radio-1" value={1}>
                        운행 주의 구간 보기
                    </ToggleButton>
                    <ToggleButton onClick={() => setMarkerPositions([])} id="tbg-radio-2" value={2}>
                        마커 지우기
                    </ToggleButton>
                </ToggleButtonGroup>


                <div id="wrap">
                    {visible && (
                        <><br />
                            <h2>Kakao Map API</h2>
                            <KakaoMap markerPositions={markerPositions} size={mapSize}
                                buspaths={buspaths}
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
