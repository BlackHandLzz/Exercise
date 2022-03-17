{


    const dom = document.querySelector('#echart4');
    const myChart = echarts.init(dom);
    console.log(dom, myChart);

    const option = {
        title: {
            text: '中国地图',
            left: 'center'
        },
        tooltip: {},
        geo: {
            map: 'china',
            //roam: true,
            zoom: 1,
            nameMap: {
                '山东': '山东省'
            },
            itemStyle: {
                normal: {
                    areaColor: '#004981',
                    borderColor: 'yellow',
                },
                emphasis: {
                    areaColor: 'red',
                    itemStyle: {
                        color: '#029fd4'
                    },
                    label: {
                        show: true
                    },
                },
                select: {
                    label: {
                        color: "#fff"
                    },
                    itemStyle: {
                        areaColor: 'red'
                    }
                }
            }
        },
        series: [{
            name: "pm2.5",
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [
                {
                    name: '海门',
                    value: [121.15, 31.89, 9]
                },
                {
                    name: '鄂尔多斯',
                    value: [109.781327, 39.608266, 12]
                },
                {
                    name: '招远',
                    value: [120.38, 37.35, 18]
                }
            ],
            symbolSize: function (val) {
                return val[2]
            }
        }]
    };
    myChart.setOption(option);
    let curInd = -1;
    setInterval(function () {
        const dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: curInd,
        });
        // 当前索引递增，不能超过总数
        curInd = (curInd + 1) % dataLen;
        // 高亮当前图新
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: curInd,
        });
        // 显示tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: curInd,
        });
    }, 1000)
}