import React from 'react';

function MainSideBar(props) {
  const { a } = props;
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


export default MainSideBar;
