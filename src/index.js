import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {HashRouter} from 'react-router-dom';
// import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={`${process.env.PUBLIC_URL}/`}>

    {/* <HashRouter> */}
      <App />
    {/* </HashRouter> */}
   
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
