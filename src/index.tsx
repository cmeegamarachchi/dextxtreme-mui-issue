import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import App from './components/App';
import './index.css';

import "typeface-roboto";

const defaultTheme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
	<ThemeProvider theme={defaultTheme}>  
    	<App />
	</ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
