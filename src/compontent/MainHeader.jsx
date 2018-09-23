import React from 'react';

const MainHeader = () => (
  <div className="header">
    <b>Hackson</b>
    <div className="search">
      <select>
        <option value="全部">全部</option>
      </select>
      <input type="text" />
    </div>
    <div className="user">
      Logout
    </div>
  </div>
);

export default MainHeader;
