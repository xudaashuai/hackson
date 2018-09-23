import React, { Component } from 'react';
import echarts from 'echarts';
import 'echarts/lib/chart/bar';


export default class ContentBarChart extends Component {
  componentDidMount() {
    const myChart1 = echarts.init(this.refs.barChart);
    myChart1.setOption({
      backgroundColor: '#f7f8fc',
      title: {
        text: '药品支出趋势',

        textStyle: {
          color: 'rgba(0,0,0,.65)',
          fontSize: '18',
          fontWeight: 'normal',
          fontFamily: 'Microsoft YaHei',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          textStyle: {
            color: '#fff',
          },

        },
      },

      legend: {
        x: '4%',
        top: '11%',
        textStyle: {
          color: '#90979c',
        },
        data: ['老用户', '新用户', '总'],
      },


      calculable: true,
      xAxis: [{
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#90979c',
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        axisLabel: {
          interval: 0,

        },
        data: [1, 2, 3, 4, 5],
      }],
      yAxis: [{
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#90979c',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,

        },
        splitArea: {
          show: false,
        },

      }],
      dataZoom: [{
        show: true,
        height: 30,
        xAxisIndex: [
          0,
        ],
        bottom: 30,
        start: 10,
        end: 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
          color: '#d3dee5',

        },
        textStyle: {
          color: '#fff',
        },
        borderColor: '#90979c',


      }, {
        type: 'inside',
        show: true,
        height: 15,
        start: 1,
        end: 35,
      }],
      series: [{
        name: '老用户',
        type: 'bar',
        stack: '总量',
        barMaxWidth: 35,
        barGap: '10%',
        itemStyle: {
          normal: {
            color: 'rgba(255,144,128,1)',
            label: {
              show: true,
              textStyle: {
                color: '#fff',
              },
              position: 'insideTop',
              formatter(p) {
                return p.value > 0 ? (p.value) : '';
              },
            },
          },
        },
        data: [
          42.25,
          42.02,
          46.66,
          41.85,
          42.65,
          43.88,
          43.27,
          43.04,
          41.96,
          42.95,
          42.69,
          39.65,
        ],
      },

      {
        name: '新用户',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            color: 'rgba(0,191,183,1)',
            barBorderRadius: 0,
            label: {
              show: true,
              position: 'top',
              formatter(p) {
                return p.value > 0 ? (p.value) : '';
              },
            },
          },
        },
        data: [
          15.50,
          14.29,
          17.97,
          14.11,
          15.44,
          16.46,
          16.41,
          14.02,
          15.76,
          13.08,
          14.58,
          10.41,
        ],
      }, {
        name: '总',
        type: 'line',
        stack: '总量',
        symbolSize: 20,
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: 'rgba(252,230,48,1)',
            barBorderRadius: 0,
            label: {
              show: true,
              position: 'top',
              formatter(p) {
                return p.value > 0 ? (p.value) : '';
              },
            },
          },
        },
        data: [
          57.75,
          56.31,
          64.63,
          55.96,
          58.09,
          60.32,
          59.68,
          57.07,
          57.07,
          56.02,
          57.27,
          50.06,
        ],
      },
      ],
    });
  }

  render() {
    return (<div ref="barChart" style={{ height: '450px', width: '100%' }} />);
  }
}
