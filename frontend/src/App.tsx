import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/global';
import Header from './components/Header';
import Routes from './routes';
import { useSelector } from 'react-redux';
import { UserState } from './reducers/userReducer';
import PageTitle from './components/PageTitle';

const App = () => {
	const user = useSelector<UserState, UserState['user']>((state) => state.user);

	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			{!user && <PageTitle title="Sign in to use the application" />}
			<Routes />
		</BrowserRouter>
	);
};

export default App;
