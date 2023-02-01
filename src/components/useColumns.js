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
                Header: "sra",
                accessor: "sra"
            },
            {
                Header: "status_code",
                accessor: "status_code"
            },

        ],
        []
    );

    return columns;
}

export default useColumns;

