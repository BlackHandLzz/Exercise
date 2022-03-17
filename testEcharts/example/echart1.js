{
    var dom = document.querySelector('#echart1');
    var myChart = echarts.init(dom, 'walden');
    console.log(dom, myChart);
    const source = [
        ['年', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        ['青年人', 820, 932, 901, 934, 1290, 1330, 1520],
        ['老年人', 200, 632, 601, 634, 850, 1000, 1100],
    ]
    const option = {
        title: {
            text: '人民收入增长情况',
            textStyle: {
                color: '#fff'
            }
        },
        dataset: { source },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                type: 'line',
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                seriesLayoutBy: 'row'
            }
        ]
    };
    myChart.setOption(option);
}