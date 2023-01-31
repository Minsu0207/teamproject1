import { useState, useEffect } from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux";
import Mynav from "./Mynav";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
} from "@reach/combobox";
// let { db } = useSelector((state) => { return state })


function Mysearch({ ss, setSs }) {
    const [table, setTable] = useState(true);
    const [search, setSearch] = useState([]);

    //db를 복사해서 동적 setABc state에 담아서,
    //search동작이 일어났을때 그걸 담아서 테이블에 만들때 동적 db state를 줘서
    //검색한 테이블 출력
    //search 를 반복문 돌려줘서테이블 작성

    // useEffect(() => {

    // },);
    console.log("search", search)
    let temp = ss.filter((i) => String(i.car_num).includes(search));
    console.log(temp)

    let Box = styled.div`
    padding :20px;
    `

    console.log(search)

    return (
        <>
            <div>
                <h4 id="demo">조회할 차량번호입력</h4>
                <Combobox aria-labelledby="demo">
                    <ComboboxInput className={"input-sm"} size={"35"}
                        placeholder={"🔍Search"}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                    <Box></Box>
                    <ComboboxPopover className="shadow-popup">
                        <ComboboxList>
                            <ComboboxOption value="2612"></ComboboxOption>
                        </ComboboxList>
                    </ComboboxPopover>
                </Combobox>

            </div>
        </>

    )
}

export default Mysearch;



