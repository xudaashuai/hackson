import React from 'react';

class MainSideBar extends React.Compontent {
  render() {
    const { a } = this.props.a;
    return (
      <div className="sidebar">
        <div>
          {a}
        </div>
        <div>
        Item2
        </div>
        <div>
        Item3
        </div>
        <div>
        Item4
        </div>
      </div>
    );
  }
}

export default MainSideBar;
