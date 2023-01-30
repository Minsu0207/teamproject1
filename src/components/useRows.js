import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function useRows() {
    let { db } = useSelector((state) => { return state })


    // const rows = useMemo(
    //     () => [db[0],db[1]],
    //     []
    // );

    const rows = useMemo(
        () => db.map(function (a, i) {
            return db[i];
        }),
        []
    );


    // const linePath = [db.map(function (a, i) {
    //     return (new kakao.maps.LatLng(
    //         a.y_gps, a.x_gps)
    //     );
    // })]



    return rows;
}
