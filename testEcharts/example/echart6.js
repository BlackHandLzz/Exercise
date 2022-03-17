{
    var dom = document.querySelector('#echart6');
    var myChart = echarts.init(dom, 'walden');
    console.log(dom, myChart);
    const source = [
        ['时间', '小米', '小麦', '高粱'],
        [2017, 1000, 800, 900],
        [2018, 500, 650, 800],
        [2019, 800, 900, 1200]
    ]
    const option = {
        title: {
            text: '农作物收成',
            left: 'center',
        },
        tooltip: {},
        dataset: {
            source
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'bar'
            },
            {
                type: 'bar'
            },
            {
                type: 'bar'
            }
        ]
    };
    myChart.setOption(option);
}