import { useMemo } from "react";

export default function useColumns() {
    const columns = useMemo(
        () => [
            {
                Header: "result",
                accessor: "result"
            },
            {
                Header: "x_gps",
                accessor: "x_gps"
            },
            {
                Header: "y_gps",
                accessor: "y_gps"
            },

        ],
        []
    );

    return columns;
}
