import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Test2() {
    const [dbdata, setDbdata] = useState([]);
    useEffect(() => {
        axios
            .get("/data")
            .then((response) => setDbdata(response.data))
            .catch((error) => console.log(error));
    }, []);


    let abc = dbdata.map((props, i,) => {
        return (
            <li key={i}>
                {i} :
                차량번호: {props.car_num}
                최대속도: {props.speed_max}
            </li>
        )
    });

    return (
        <>
            {abc[0]}
            {abc[1]}
            {abc[2]}
            {abc[3]}
        </>
    );
}

export default Test2;
