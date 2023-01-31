import { useMemo } from "react";

function useColumns() {
    const columns = useMemo(
        () => [
            {
                Header: "차량번호",
                accessor: "car_num"
            },
            {
                Header: "운행일자",
                accessor: "date"
            },
            {
                Header: "운행당 안전 운전율",
                accessor: "dsr"
            },
            {
                Header: "운행점수",
                accessor: "durs"
            },

        ],
        []
    );

    return columns;
}

export default useColumns;

