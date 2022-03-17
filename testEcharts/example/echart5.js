{
    var dom = document.querySelector('#echart5');
    var myChart = echarts.init(dom, 'walden');
    console.log(dom, myChart);
    const data = [
        {
            value: [4300, 10000, 20000, 35000, 50000, 19000],
            name: '预算分配'
        },
        {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销'
        },
    ]
    const indicator = [
        { name: '销售', max: 6500 },
        { name: '管理', max: 16000 },
        { name: '信息技术', max: 30000 },
        { name: '客服', max: 38000 },
        { name: '研发', max: 52000 },
        { name: '市场', max: 25000 },
    ]
    const option = {
        title: {
            text: '财务开销',
            left: 'left',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {},
        legend: {
            data: ['预算分配', '实际开销'],
            orient: 'vertical',
            left: 0,
            top: 30
        },
        radar: {
            indicator
        },
        series: [
            {
                type: 'radar',
                data
            },
        ]
    };
    myChart.setOption(option);
}