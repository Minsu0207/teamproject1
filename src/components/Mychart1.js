import { ResponsiveLine } from '@nivo/line'
import 'bootstrap/dist/css/bootstrap.min.css';

function Mychart1({ carlist }) {

    const handle = {
        barClick: (data: any) => {
            console.log(data);
        },

        legendClick: (data: any) => {
            console.log(data);
        },
    };

    console.log(carlist[0])
    // console.log(carlist[0]?.car_num)


    const data = [
        {
            "id": "japan",
            "color": "hsl(343, 70%, 50%)",
            "data": [
                {
                    "x": "abc",
                    "y": 221
                },
                {
                    "x": "abcd",
                    "y": 120
                },
                {
                    "x": "boat",
                    "y": 91
                }
            ]
        }
    ]

    const data1 = [{
        "id": carlist[0]?.car_num,
        "color": "hsl(343, 70%, 50%)",
        "data": carlist.map((a) => {
            return a.dsr
        })
    }]

    console.log('data', data)
    console.log('data1', data1)

    return (
        <>
            <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>


                <ResponsiveLine
                    data={data}
                    keys={carlist.car_num}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: true,
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
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            dataFrom: "keys",
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
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
                            ],
                            onClick: handle.legendClick,
                        },
                    ]}
                />
            </div>
        </>
    );
}



export default Mychart1;