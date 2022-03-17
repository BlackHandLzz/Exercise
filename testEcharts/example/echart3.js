{
    var dom = document.querySelector('#echart3');
    var myChart = echarts.init(dom, 'walden');
    console.log(dom, myChart);
    const dimensions = ['旅游', '影视', '服装', '电影', '其他']
    const source = [
        [0, 0, 25, 20, 35],
        [15, 10, 15, 25, 30],
        [20, 25, 30, 25, 30], [35, 35, 50, 25, 30], [45, 45, 55, 20, 30], [35, 45, 25, 20, 35], [30, 20, 45, 20, 30], [25, 35, 35, 20, 30], [15, 25, 15, 20, 30]
    ]
    const option = {
        title: {
            text: '收入与年龄比',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        dataset: {
            dimensions,
            source
        },
        tooltip: {},
        xAxis: {
            type: 'value',
            name: '收入',
            axisLayout: {
                rotate: 50
            }
        },
        yAxis: {
            type: 'value',
            name: '年龄'
        },
        series: [
            {
                type: 'scatter',
                symbolSize: 5,
                encode: {
                    x: '收入',
                    y: '年龄',
                    tooltip: [0, 1, 2, 3, 4]
                }
            },
        ]
    };
    myChart.setOption(option);
}