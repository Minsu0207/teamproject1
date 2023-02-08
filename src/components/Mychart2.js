import { ResponsiveLine } from '@nivo/line'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

function Mychart2() {
    let { drive } = useSelector((state) => { return state })

    const data1 = [{
        "id": 2612,
        "data": drive.filter((a) => a.car_num == 2612).map((a, i) => {
            return {
                key: { i },
                "x": a.date,
                "y": a.dsr
            }
        })
    }]
    const data2 = [{
        "id": 3897,
        "data": drive.filter((a) => a.car_num == 3897).map((a, i) => {
            return {
                key: { i },
                "x": a.date,
                "y": a.dsr
            }
        })
    }]
    const data3 = [{
        "id": 9582,
        "data": drive.filter((a) => a.car_num == 9582).map((a, i) => {
            return {
                key: { i },
                "x": a.date,
                "y": a.dsr
            }
        })
    }]
    const data4 = [{
        "id": 4699,
        "data": drive.filter((a) => a.car_num == 4699).map((a, i) => {
            return {
                key: { i },
                "x": a.date,
                "y": a.dsr
            }
        })
    }]
    const data5 = [{
        "id": 4985,
        "data": drive.filter((a) => a.car_num == 4985).map((a, i) => {
            return {
                key: { i },
                "x": a.date,
                "y": a.dsr
            }
        })
    }]
    const data6 = [{
        "id": 5221,
        "data": drive.filter((a) => a.car_num == 5221).map((a, i) => {
            return {
                key: { i },
                "x": a.date,
                "y": a.dsr
            }
        })
    }]
    const data7 = [{
        "id": 5634,
        "data": drive.filter((a) => a.car_num == 5634).map((a, i) => {
            return {
                key: { i },
                "x": a.date,
                "y": a.dsr
            }
        })
    }]
    const data8 = [{
        "id": 8993,
        "data": drive.filter((a) => a.car_num == 8993).map((a, i) => {
            return {
                key: { i },
                "x": a.date,
                "y": a.dsr
            }
        })
    }]
    const data9 = [{
        "id": 9007,
        "data": drive.filter((a) => a.car_num == 9007).map((a, i) => {
            return {
                key: { i },
                "x": a.date,
                "y": a.dsr
            }
        })
    }]
    const data10 = [{
        "id": 9357,
        "data": drive.filter((a) => a.car_num == 9357).map((a, i) => {
            return {
                key: { i },
                "x": a.date,
                "y": a.dsr
            }
        })
    }]


    const data = data1.concat(data2, data3, data4, data5, data6, data7, data8, data9, data10)

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>
                날자별 안전운행율
            </h2>
            <h4 style={{ textAlign: 'right' }}>
                기간 : 2022년12월01 - 2022년 12월14일
            </h4>
            <div style={{
                width: "2000px",
                height: "700px",

            }}>
                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: '98.1',
                        max: '100',
                        // stacked: true,
                        reverse: false
                    }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '운행일자',
                        legendOffset: 40,
                        legendPosition: 'middle'

                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '안전운행율',
                        legendOffset: -50,
                        legendPosition: 'middle'
                    }}
                    colors={{ scheme: 'category10' }}
                    pointSize={5}
                    pointColor={{ from: 'color', modifiers: [] }}
                    pointBorderWidth={4}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabel={function (t) { return t.x + ": " + t.y }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'right',
                            direction: 'column',
                            justify: false,
                            translateX: 89,
                            translateY: 20,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 74,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 20,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </>
    );
}



export default Mychart2;