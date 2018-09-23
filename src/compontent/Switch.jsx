import React, { Component } from 'react';
import '../style/Switch.less';

export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actived: false,
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    const { actived } = this.state;
    if (!actived) {
      return;
    }
    this.setState({
      actived: false,
    });
    this.props.onSwitch(false);
  }

  open() {
    const { actived } = this.state;
    if (actived) {
      return;
    }
    this.setState({
      actived: true,
    });
    this.props.onSwitch(true);
  }

  render() {
    const { actived } = this.state;
    return (
      <span className="switch-container">
        <span
          onClick={this.close}
          className={!actived && 'switch-item-active'}
        >
          占比
        </span>
        <span
          onClick={this.open}
          className={actived && 'switch-item-active'}
        >
          金额
        </span>
      </span>
    );
  }
}
