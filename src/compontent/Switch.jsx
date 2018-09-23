import React, { Component } from 'react';

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
    this.props.onSwitch(actived);
  }

  open() {
    const { actived } = this.state;
    if (actived) {
      return;
    }
    this.setState({
      actived: true,
    });
    this.props.onSwitch(actived);
  }

  render() {
    const { actived } = this.state;
    return (
      <div style={{ position: 'absolute', right: '0' }}>
        <div
          onClick={this.close}
          style={{ display: 'inline-block', backgroundColor: actived ? 'blue' : 'red' }}
        >
          占比
        </div>
        <div
          onClick={this.open}
          style={{ display: 'inline-block', backgroundColor: actived ? 'red' : 'blue' }}
        >
          金额
        </div>
      </div>
    );
  }
}
