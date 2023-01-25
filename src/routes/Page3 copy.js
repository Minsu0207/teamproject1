import { ResponsiveBar } from '@nivo/bar'
import Mynavbar from "../components/Mynavbar";


const Page3 = () => {

    return (
        <div style={{ width: '800px', height: '500px', margin: '0 auto' }}>
            <Mynavbar />
            <ResponsiveBar
                data={[
                    {
                        "country": "AD",
                        "hot dog": 86,
                        "hot dogColor": "hsl(287, 70%, 50%)",
                        "burger": 89,
                        "burgerColor": "hsl(219, 70%, 50%)",
                        "sandwich": 38,
                        "sandwichColor": "hsl(82, 70%, 50%)",
                        "kebab": 84,
                        "kebabColor": "hsl(330, 70%, 50%)",
                        "fries": 138,
                        "friesColor": "hsl(141, 70%, 50%)",
                        "donut": 183,
                        "donutColor": "hsl(21, 70%, 50%)"
                    },
                    {
                        "country": "AE",
                        "hot dog": 46,
                        "hot dogColor": "hsl(300, 70%, 50%)",
                        "burger": 76,
                        "burgerColor": "hsl(43, 70%, 50%)",
                        "sandwich": 57,
                        "sandwichColor": "hsl(103, 70%, 50%)",
                        "kebab": 141,
                        "kebabColor": "hsl(11, 70%, 50%)",
                        "fries": 26,
                        "friesColor": "hsl(187, 70%, 50%)",
                        "donut": 128,
                        "donutColor": "hsl(142, 70%, 50%)"
                    },
                    {
                        "country": "AF",
                        "hot dog": 134,
                        "hot dogColor": "hsl(185, 70%, 50%)",
                        "burger": 171,
                        "burgerColor": "hsl(132, 70%, 50%)",
                        "sandwich": 151,
                        "sandwichColor": "hsl(329, 70%, 50%)",
                        "kebab": 97,
                        "kebabColor": "hsl(160, 70%, 50%)",
                        "fries": 194,
                        "friesColor": "hsl(86, 70%, 50%)",
                        "donut": 26,
                        "donutColor": "hsl(113, 70%, 50%)"
                    },
                    {
                        "country": "AG",
                        "hot dog": 173,
                        "hot dogColor": "hsl(330, 70%, 50%)",
                        "burger": 55,
                        "burgerColor": "hsl(225, 70%, 50%)",
                        "sandwich": 90,
                        "sandwichColor": "hsl(217, 70%, 50%)",
                        "kebab": 131,
                        "kebabColor": "hsl(226, 70%, 50%)",
                        "fries": 25,
                        "friesColor": "hsl(212, 70%, 50%)",
                        "donut": 30,
                        "donutColor": "hsl(43, 70%, 50%)"
                    },
                    {
                        "country": "AI",
                        "hot dog": 65,
                        "hot dogColor": "hsl(219, 70%, 50%)",
                        "burger": 19,
                        "burgerColor": "hsl(92, 70%, 50%)",
                        "sandwich": 118,
                        "sandwichColor": "hsl(204, 70%, 50%)",
                        "kebab": 16,
                        "kebabColor": "hsl(49, 70%, 50%)",
                        "fries": 152,
                        "friesColor": "hsl(336, 70%, 50%)",
                        "donut": 169,
                        "donutColor": "hsl(79, 70%, 50%)"
                    },
                    {
                        "country": "AL",
                        "hot dog": 139,
                        "hot dogColor": "hsl(328, 70%, 50%)",
                        "burger": 6,
                        "burgerColor": "hsl(0, 70%, 50%)",
                        "sandwich": 47,
                        "sandwichColor": "hsl(120, 70%, 50%)",
                        "kebab": 162,
                        "kebabColor": "hsl(42, 70%, 50%)",
                        "fries": 99,
                        "friesColor": "hsl(316, 70%, 50%)",
                        "donut": 61,
                        "donutColor": "hsl(221, 70%, 50%)"
                    },
                    {
                        "country": "AM",
                        "hot dog": 25,
                        "hot dogColor": "hsl(134, 70%, 50%)",
                        "burger": 184,
                        "burgerColor": "hsl(214, 70%, 50%)",
                        "sandwich": 142,
                        "sandwichColor": "hsl(359, 70%, 50%)",
                        "kebab": 1,
                        "kebabColor": "hsl(137, 70%, 50%)",
                        "fries": 57,
                        "friesColor": "hsl(335, 70%, 50%)",
                        "donut": 97,
                        "donutColor": "hsl(160, 70%, 50%)"
                    }
                ]}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
            />
        </div>
    );
}

export default Page3;