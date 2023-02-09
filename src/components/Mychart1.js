import { ResponsiveLine } from '@nivo/line'
import 'bootstrap/dist/css/bootstrap.min.css';

function Mychart1({ listsafety, listoil }) {


    const data = [{
        "id": listsafety[0]?.car_num + '안전운행율',
        "data": listsafety.map((a, i) => {
            return {
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": listoil[0]?.car_num + '주유비',
        "data": listoil.map((a, i) => {
            return {
                "x": a.date,
                "y": a.oil_money * a.daily_distance
            }
        })
    }

    ]


    return (
        <>
            <div style={{
                width: "100%",
                height: "100%",

            }}>

                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    y1Scale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                    }}
                    yScale={{
                        type: 'linear',
                        min: '98.2',
                        max: '100',
                        stacked: true,
                        reverse: false
                    }

                    }
                    yFormat=" >-"
                    axisTop={null}
                    axisRight={{
                        orient: 'right',
                        tickSize: 7,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendOffset: 15
                    }}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 10,
                        tickPadding: 5,
                        tickRotation: 30,
                        legend: '날자별 운행일지',
                        legendOffset: -15,
                        legendPosition: 'start'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '안전운전율',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    colors={{ scheme: 'category10' }}
                    lineWidth={3}
                    pointSize={7}
                    pointColor={{ from: 'color', modifiers: [] }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    enableSlices="x"
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'top-right',
                            direction: 'column',
                            justify: false,
                            translateX: 118,
                            translateY: -4,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 75,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
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



export default Mychart1;