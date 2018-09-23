import React, { Component } from 'react';
import echarts from 'echarts';
import 'echarts/lib/chart/pie';


export default class ContentPieChart extends Component {
  componentDidMount() {
    const { data } = this.props;
    const myChart = echarts.init(this.c);
    const unit = '%';
    myChart.setOption({
      title: {
        show: data.show,
        text: '药品支出详细分析',
        textStyle: {
          color: 'rgba(0,0,0,.65)',
          fontSize: '18',
          fontWeight: 'normal',
          fontFamily: 'Microsoft YaHei',
        },
      },
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        show: false,
        orient: 'vertical',
        x: 'left',
        // data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      color: data.option4,
      series: [
        {
          name: '药品支出详细分析',
          type: 'pie',
          startAngle: 270,
          radius: data.option2,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              color: '#333',
              position: 'inner',
              formatter: `{b}\n{d}${unit}`,
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold',
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: data.option,
        },
        {
          name: '药品支出详细分析',
          type: 'pie',
          startAngle: 270,
          radius: data.option3,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              color: '#333',
              position: 'inner',
              formatter: `{b}\n{d}${unit}`,
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold',
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: data.option1,
        },
      ],
    });
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return (<div ref={c => this.c = c} style={{ flex: '1' }} />);
  }
}
