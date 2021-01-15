import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* <HashRouter basename={`${process.env.PUBLIC_URL}/`}> */}

    <BrowserRouter basename="/mountains">
      <App />
    </BrowserRouter>
   
    {/* </HashRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);
