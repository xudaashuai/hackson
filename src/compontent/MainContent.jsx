import React from 'react';
import ContentPieChart from './ContentPieChart';
import Switch from './Switch';


const data1 = {
  option: [
    { name: '其他', value: '8929.30', rateValue: '0.6119' },
    { name: '处方', value: '326.20', rateValue: '0.0223' },
    { name: '非处方', value: '5337.89', rateValue: '0.3658' },
  ],
  option1: [
    { name: '其他费用', value: '8929.30', rateValue: '0.6119' },
    { name: '药品费用', value: '5664.09', rateValue: '0.3881' },
  ],
  option2: ['55%', '80%'],
  option3: [0, '40%'],
  option4: ['#a6b6d7', '#e1bfc8', '#f1ebed', '#d2b8bf', '#efd4db'],
  show: true,
};
const data2 = {
  option: [
    { name: '西药', value: '42.22', rateValue: '0.1295' },
    { name: '中药', value: '10.39', rateValue: '0.0319' },
    { name: '中成药', value: '29.64', rateValue: '0.0906' },
    { name: '西药', value: '169.84', rateValue: '0.5207' },
    { name: '中药', value: '0', rateValue: '0' },
    { name: '中成药', value: '74.18', rateValue: '0.2274' },
  ],
  option1: [
    { name: '甲类', value: '82.16', rateValue: '0.2519' },
    { name: '乙类', value: '244.03', rateValue: '0.7481' },
  ],
  option2: ['45%', '60%'],
  option3: [0, '32%'],
  option4: ['#e1c6bf', '#d59a9a', '#cebfe1', '#e4aacd', '#f6c9d4'],
  show: false,
};
const data3 = {
  option: [
    { name: '西药', value: '1210.14', rateValue: '0.2267' },
    { name: '中药', value: '242.87', rateValue: '0.0455' },
    { name: '中成药', value: '798.33', rateValue: '0.1496' },
    { name: '西药', value: '2509.81', rateValue: '0.4702' },
    { name: '中药', value: '0', rateValue: '0' },
    { name: '中成药', value: '576.71', rateValue: '0.1080' },
  ],
  option1: [
    { name: '甲类', value: '2251.35', rateValue: '0.4218' },
    { name: '乙类', value: '3086.53', rateValue: '0.5782' },
  ],
  option2: ['45%', '60%'],
  option3: [0, '32%'],
  option4: ['#e1c6bf', '#d59a9a', '#cebfe1', '#e4aacd', '#f6c9d4'],
  show: false,
};

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRate: false,
    };
  }

  render() {
    const { isRate } = this.state;
    return (
      <div className="content">
        <div className="content-item">
          <ContentPieChart data={data1} isRate={isRate} />
          <ContentPieChart data={data2} isRate={isRate} />
          <ContentPieChart data={data3} isRate={isRate} />
          <div style={{ position: 'absolute', right: '0' }}>
            <Switch onSwitch={(actived) => { this.setState({ isRate: actived }); }} />
          </div>
        </div>
      </div>
    );
  }
}
export default MainContent;
