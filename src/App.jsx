import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import MainHeader from './compontent/MainHeader';
import MainSideBar from './compontent/MainSideBar';
import MainContent from './compontent/MainContent';
import './App.less';

function App() {
  return (
    <div className="container">
      <Route path="/" component={MainHeader} />
      <div className="content-container">
        <Route path="/" component={MainSideBar} />
        <Route exact path="/" component={MainContent} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
