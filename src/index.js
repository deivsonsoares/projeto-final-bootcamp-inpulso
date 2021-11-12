import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import * as serviceworker from '.serviceWroker';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-material-icon/dist/material-icon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import App from './App';
//import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>    
      <App />    
  </React.StrictMode>,
  document.getElementById('root')
);
//serviceworker.unregister();