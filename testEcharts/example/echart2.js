{
    var dom = document.querySelector('#echart2');
    var myChart = echarts.init(dom, 'walden');
    console.log(dom, myChart);
    const source = [
        { value: 5, name: '旅游' },
        { value: 4, name: '影视' },
        { value: 3, name: '服装' },
        { value: 2, name: '电影' },
        { value: 1, name: '其他' },
    ]
    const option = {
        title: {
            text: '衣食住行消费比',
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
                type: 'pie',
                radius: '60%',
                roseType: true
            },
        ]
    };
    myChart.setOption(option);
}