import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import App from './components/App';
import './index.css';

import "typeface-roboto";

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

const defaultTheme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
	<ThemeProvider theme={defaultTheme}>  
    	<App />
	</ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
