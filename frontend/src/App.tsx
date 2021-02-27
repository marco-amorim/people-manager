import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/global';
import Header from './components/Header';
import Routes from './routes';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes />
		</BrowserRouter>
	);
};

export default App;
