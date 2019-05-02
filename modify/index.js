$(function() {
    var myChart = echarts.init(document.getElementById('map'));
    $.get('../modify/map.json', function(geoJson) {
        echarts.registerMap('map', geoJson, {});
        var option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{
                name: '地图',
                type: 'map',
                mapType: 'map',
                aspectScale: 0.85, //地图长度比
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#34409a'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#333'
                        }
                    }
                },
                data: [{
                    name: 'test',
                    tooltip: {
                        formatter: ''
                    }
                }]
            }]
        };
        myChart.setOption(option);
    });
});