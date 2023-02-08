import { ResponsiveLine } from '@nivo/line'
import 'bootstrap/dist/css/bootstrap.min.css';

function Mychart1({ carlist }) {


    const data = [{
        "id": carlist[0]?.car_num,
        "data": carlist.map((a, i) => {
            return {
                "x": a.date,
                "y": a.dsr
            }
        })
    }]


    return (
        <>
            <div style={{
                width: "2000px",
                height: "500px",

            }}>


                <ResponsiveLine
                    data={data}
                    keys={carlist.car_num}
                    margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    colors={["red"]}
                    colorBy="id"
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
                        tickSize: 5,  //값 설명하기 위해 튀어나오는 점 크기
                        tickPadding: 5, // tick padding
                        tickRotation: 0, // tick 기울기
                        legend: '날짜별 안전운행율', // 라벨
                        legendOffset: 36, // 글씨와 chart간 간격
                        legendPosition: 'middle'  // 글씨 위치

                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '%',
                        legendOffset: 0,
                        legendPosition: 'top'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            dataFrom: "keys", // 보일 데이터 형태
                            anchor: 'bottom-right', // 위치
                            direction: 'column', // item 그려지는 방향
                            justify: false, // 글씨, 색상간 간격 justify 적용 여부
                            translateX: 100, // chart와 X 간격
                            translateY: 0, // chart와 Y 간격
                            itemsSpacing: 0,  // item간 간격
                            itemDirection: 'left-to-right', // item 내부에 그려지는 방향
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
                        },
                    ]}
                />
            </div>
        </>
    );
}



export default Mychart1;