import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core';
import { MuiTheme } from './assets/styles/MuiTheme';

ReactDOM.render(
	<MuiThemeProvider theme={MuiTheme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);
