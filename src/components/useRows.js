import { useMemo } from "react";
import { useSelector } from "react-redux";

function useRows() {
    let { db } = useSelector((state) => { return state })


    const rows = useMemo(
        () => db.map(function (a, i) {
            return db[i];
        }),
        []
    );



    return rows;
}

export default useRows;