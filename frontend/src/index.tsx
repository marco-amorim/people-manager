import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core';
import { MuiTheme } from './assets/styles/MuiTheme';
import { createStore } from 'redux';
import { userReducer } from './reducers/userReducer';
import { Provider } from 'react-redux';

const store = createStore(userReducer);

ReactDOM.render(
	<MuiThemeProvider theme={MuiTheme}>
		<Provider store={store}>
			<App />
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('root')
);
