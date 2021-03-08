import { Route, Switch } from 'react-router-dom';
import EditPerson from '../components/EditPerson';
import LoginForm from '../components/LoginForm';
import NewPerson from '../components/NewPerson';
import PeopleList from '../components/PeopleList';
import PersonView from '../components/PersonView';
import { useSelector } from 'react-redux';
import { UserState } from '../reducers/userReducer';

const Routes = () => {
	const user = useSelector<UserState, UserState['user']>((state) => state.user);

	return (
		<Switch>
			{user && (
				<Switch>
					<Route path="/" exact component={PeopleList} />
					<Route path="/person/view/:id" exact component={PersonView} />
					<Route path="/person/edit/:id" exact component={EditPerson} />
					<Route path="/person/new" exact component={NewPerson} />
				</Switch>
			)}
			<Route path="/login" exact component={LoginForm} />
		</Switch>
	);
};

export default Routes;
