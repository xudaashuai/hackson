import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

function MainSideBar() {
  const paths = [
    { text: '运营总览', path: '/' },
    { text: '指标', path: '/1' },
    { text: '专题', path: '/2' },
    { text: '报表', path: '/3' },
    { text: '即席工具', path: '/4' },
    { text: '权限管理', path: '/5' },
  ];
  return (
    <div className="sidebar">
      {
        paths.map(item => (
          <div><NavLink exact to={item.path} activeClassName="active">{item.text}</NavLink></div>
        ))
      }
    </div>
  );
}

export default MainSideBar;
