import { useState } from "react";
import { useSelector } from "react-redux";

function Mysearch(props) {
    let { db } = useSelector((state) => { return state })

    const handleChange = (e) => {
        props.onUserInput(e.target.value);
    }

    return (
        <>
            <input type={"text"} className={"input-sm"} size={"25"}
                placeholder={"Search"} onChange={handleChange}
                value={props.ss}
            />
        </>

    )
}

export default Mysearch;