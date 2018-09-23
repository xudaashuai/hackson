import React from 'react';

function MainSideBar(props) {
  const { a } = props;
  return (
    <div className="sidebar">
      <div className="active">运营总览</div>
      <div>指标</div>
      <div>专题</div>
      <div>报表</div>
      <div>即席工具</div>
      <div>权限管理</div>
    </div>
  );
}


export default MainSideBar;
