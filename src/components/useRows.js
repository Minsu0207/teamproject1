import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function useRows() {
    let { db } = useSelector((state) => { return state })



    const rows = useMemo(
        () => [
            { db }

        ],
        []
    );



    console.log('row', rows)
    console.log('db', db)

    return rows;
}
