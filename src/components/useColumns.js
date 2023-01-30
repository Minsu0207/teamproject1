import { useMemo } from "react";

export default function useColumns() {
    const columns = useMemo(
        () => [
            {
                Header: "result",
                accessor: "marca"
            },
            {
                Header: "x_gps",
                accessor: "modelo"
            },
            {
                Header: "y_gps",
                accessor: "segmento"
            },

        ],
        []
    );

    return columns;
}
