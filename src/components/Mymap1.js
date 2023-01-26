import { Map } from "react-kakao-maps-sdk";
import React, { useEffect } from 'react';
const { kakao } = window;


function Mymap1() {


    return (
        <Map
            center={{
                lat: 35.23624224192166,
                lng: 129.1588714904912
            }}
            style={{ width: "600px", height: "600px" }}
        >
        </Map>
    )
}

export default Mymap1;


